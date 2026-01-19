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
if [ -d "$INSTALL_PATH" ]; then
    echo -e "${YELLOW}⚠️  Directory ${INSTALL_PATH} already exists. Skipping submodule add.${NC}"
else
    git submodule add "$REPO_URL" "$INSTALL_PATH"
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
    node "$SETUP_SCRIPT"
else
    echo -e "${YELLOW}⚠️  Setup script not found at $SETUP_SCRIPT. Skipping dependency installation.${NC}"
fi

# 3. Cleanup (Clean Setup)
echo -e "\n${BLUE}🧹 Cleaning up workspace (Keeping only essential files)...${NC}"
cd "$INSTALL_PATH"

# Create styles directory if it doesn't exist
mkdir -p styles

# Copy global css if it exists in app/globals.css
if [ -f "app/globals.css" ]; then
    cp "app/globals.css" "styles/globals.css"
    echo -e "${GREEN}✨ Copied app/globals.css to styles/globals.css${NC}"
fi

# Define the files/folders to KEEP
# We will move them to a temporary directory, delete everything, then move them back
TEMP_DIR=$(mktemp -d)

# Function to safely move if exists
safe_move() {
    if [ -e "$1" ]; then
        cp -R "$1" "$TEMP_DIR/"
    fi
}

safe_move "components"
safe_move "libs"
safe_move "lib" # legacy support
safe_move "hooks"
safe_move "theme-provider.tsx"
safe_move "index.ts"
safe_move "package.json"
safe_move "tsconfig.json"
safe_move "styles" # The one we just created
safe_move "scripts" # Keep scripts for future updates if needed
safe_move "postcss.config.mjs"

# Delete everything in the current directory (hidden files too, except .git)
# We need to be careful not to delete .git directory
find . -maxdepth 1 ! -name '.' ! -name '..' ! -name '.git' -exec rm -rf {} +

# Move files back from temp
cp -R "$TEMP_DIR/"* .
rm -rf "$TEMP_DIR"

echo -e "\n${GREEN}✅ Nova UI installed successfully!${NC}"
echo -e "   Location: ${INSTALL_PATH}"
echo -e "   Only essential files are retained."
