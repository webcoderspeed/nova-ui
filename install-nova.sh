#!/bin/bash

# Nova UI Installation Script
# Usage: ./install-nova.sh [repo_url] [install_path] [version]
# Example: ./install-nova.sh git@webcoderspeed:webcoderspeed/nova-ui.git packages/nova-ui v1.0.0

set -e

REPO_URL=${1:-"git@webcoderspeed:webcoderspeed/nova-ui.git"}
INSTALL_PATH=${2:-"packages/nova-ui"}
VERSION=$3

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${BLUE}
  _   _                  _   _ ___ 
 | \ | | _____   ____ _ | | | |_ _|
 |  \| |/ _ \ \ / / _\` || | | || | 
 | |\  | (_) \ V / (_| || |_| || | 
 |_| \_|\___/ \_/ \__,_| \___/|___|
                                   
${NC}"
echo -e "${BLUE}🚀 Starting Nova UI Installation...${NC}"

# Check Git
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed.${NC}"
    exit 1
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed.${NC}"
    exit 1
fi

# 1. Add Submodule
echo -e "\n${BLUE}📂 Adding submodule from ${REPO_URL} to ${INSTALL_PATH}...${NC}"

# Handle "Zombie" state: Path is in git index but directory is missing
# This causes 'already exists in the index' error during submodule add
if git ls-files --error-unmatch "$INSTALL_PATH" &> /dev/null; then
    if [ ! -d "$INSTALL_PATH" ]; then
        echo -e "${YELLOW}⚠️  Found '${INSTALL_PATH}' in git index but missing on disk (Zombie state).${NC}"
        echo -e "${YELLOW}🧹 Removing from index to allow fresh install...${NC}"
        git rm --cached "$INSTALL_PATH"
    fi
fi

if [ -d "$INSTALL_PATH" ]; then
    echo -e "${YELLOW}⚠️  Directory ${INSTALL_PATH} already exists. Skipping submodule add.${NC}"
else
    git submodule add --force "$REPO_URL" "$INSTALL_PATH"
fi

# 1.5 Switch to Version (if specified)
if [ -n "$VERSION" ]; then
    echo -e "\n${BLUE}🔀 Switching to version ${VERSION}...${NC}"
    cd "$INSTALL_PATH"
    # Fetch all tags and branches to ensure we can checkout
    git fetch --all --tags
    git checkout "$VERSION"
    cd - > /dev/null
fi

# 2. Install Dependencies
echo -e "\n${BLUE}📦 Installing dependencies...${NC}"
# Check if the setup script exists
SETUP_SCRIPT="$INSTALL_PATH/scripts/setup-submodule.mjs"

if [ -f "$SETUP_SCRIPT" ]; then
    echo -e "${CYAN}🔧 Running automatic dependency setup...${NC}"
    # Run setup script and automatically answer 'Y' to install
    echo "Y" | node "$SETUP_SCRIPT"
    
    # Check if setup was successful and extract configuration suggestions
    echo -e "\n${BLUE}⚙️  Applying automatic configuration...${NC}"
    
    # Auto-detect and update tailwind config
    if [ -f "tailwind.config.js" ] || [ -f "tailwind.config.ts" ]; then
        echo -e "${GREEN}✅ Found Tailwind config - updating content paths${NC}"
        # Get relative path to nova-ui components
        RELATIVE_PATH="$INSTALL_PATH/components/**/*.{ts,tsx}"
        
        # Update tailwind config
        if [ -f "tailwind.config.js" ]; then
            # Add nova-ui components to content array
            if ! grep -q "$RELATIVE_PATH" "tailwind.config.js"; then
                sed -i '' "s/content: \[/content: [\n    \"$RELATIVE_PATH\",/" "tailwind.config.js"
                echo -e "${GREEN}✨ Added Nova UI components to Tailwind config${NC}"
            fi
        fi
    fi
    
    # Auto-update tsconfig paths
    if [ -f "tsconfig.json" ]; then
        echo -e "${GREEN}✅ Found TypeScript config - adding path aliases${NC}"
        
        # Use Node.js to update tsconfig safely (preserves comments, handles loose JSON better than jq)
        node -e "
        const fs = require('fs');
        const installPath = '$INSTALL_PATH';
        const file = 'tsconfig.json';
        
        try {
            let content = fs.readFileSync(file, 'utf8');
            let updated = false;
            
            // 1. Add @nova-ui/* alias
            if (!content.includes('\"@nova-ui/*\"')) {
                const newAlias = '\"@nova-ui/*\": [\"./' + installPath + '/*\"]';
                if (content.includes('\"paths\": {')) {
                    content = content.replace('\"paths\": {', '\"paths\": {\n      ' + newAlias + ',');
                    updated = true;
                } else if (content.includes('\"compilerOptions\": {')) {
                    content = content.replace('\"compilerOptions\": {', '\"compilerOptions\": {\n    \"paths\": {\n      ' + newAlias + '\n    },');
                    updated = true;
                }
            }
            
            // 2. Add @/packages/nova-ui/* alias (Backward Compatibility)
            if (!content.includes('\"@/packages/nova-ui/*\"')) {
                const newAlias = '\"@/packages/nova-ui/*\": [\"./' + installPath + '/*\"]';
                // If we just added paths, we can find it now
                if (content.includes('\"paths\": {')) {
                    content = content.replace('\"paths\": {', '\"paths\": {\n      ' + newAlias + ',');
                    updated = true;
                }
            }
            
            if (updated) {
                fs.writeFileSync(file, content);
                console.log('✨ Added path aliases to tsconfig.json');
            } else {
                console.log('✅ Path aliases already exist');
            }
        } catch (e) {
            console.error('❌ Failed to update tsconfig.json:', e);
            process.exit(1);
        }
        "
    fi
    
else
    echo -e "${YELLOW}⚠️  Setup script not found at $SETUP_SCRIPT. Skipping dependency installation.${NC}"
fi

# 3. Cleanup (Strict Mode)
echo -e "\n${BLUE}🧹 Cleaning up workspace (Strict mode - Keeping only requested files)...${NC}"
cd "$INSTALL_PATH"

# Create styles directory if it doesn't exist
mkdir -p styles

# Copy global css if it exists in app/globals.css and styles/globals.css doesn't exist
if [ -f "app/globals.css" ] && [ ! -f "styles/globals.css" ]; then
    cp "app/globals.css" "styles/globals.css"
    echo -e "${GREEN}✨ Copied app/globals.css to styles/globals.css${NC}"
fi

TEMP_DIR=$(mktemp -d)

# Move Root Items
# hooks, lib, styles, index.ts, package.json, postcss.config.mjs
items=("hooks" "lib" "styles" "index.ts" "package.json" "postcss.config.mjs")
for item in "${items[@]}"; do
    if [ -e "$item" ]; then
        cp -R "$item" "$TEMP_DIR/"
    fi
done

# Move Granular Components
mkdir -p "$TEMP_DIR/components"
if [ -d "components/nova" ]; then cp -R "components/nova" "$TEMP_DIR/components/"; fi
if [ -d "components/ui" ]; then cp -R "components/ui" "$TEMP_DIR/components/"; fi
if [ -f "components/index.ts" ]; then cp "components/index.ts" "$TEMP_DIR/components/"; fi
if [ -f "components/theme-provider.tsx" ]; then cp "components/theme-provider.tsx" "$TEMP_DIR/components/"; fi

# Delete everything in the current directory (hidden files too, except .git)
# We need to be careful not to delete .git directory
find . -maxdepth 1 ! -name '.' ! -name '..' ! -name '.git' -exec rm -rf {} +

# Move files back from temp
cp -R "$TEMP_DIR/"* .
rm -rf "$TEMP_DIR"

# 4. Rewrite Internal Imports
echo -e "\n${BLUE}🔄 Rewriting internal imports to match new structure...${NC}"
# Find all .ts and .tsx files in the installed package
find . -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 | while IFS= read -r -d '' file; do
    # Replace "@/ with "@/packages/nova-ui/ (using the INSTALL_PATH logic, but hardcoded to user preference if they want strict pattern)
    # Actually, INSTALL_PATH is "packages/nova-ui". So we want "@/ + INSTALL_PATH + /"
    
    # We use | as delimiter for sed to avoid escaping slashes in path
    if grep -q "from \"@/" "$file" || grep -q "from '@/" "$file"; then
        sed -i '' "s|from \"@/|from \"@/$INSTALL_PATH/|g" "$file"
        sed -i '' "s|from '@/|from '@/$INSTALL_PATH/|g" "$file"
    fi
done
echo -e "${GREEN}✨ Updated internal imports to use @/$INSTALL_PATH/* pattern${NC}"

echo -e "\n${GREEN}✅ Nova UI installed successfully!${NC}"
echo -e "   Location: ${INSTALL_PATH}"
echo -e "   Only essential files are retained."
