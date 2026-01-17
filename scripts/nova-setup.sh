#!/bin/bash

# 🚀 Nova.UI Advanced Setup Script
# Combines functionality from install-nova.sh and setup-submodule.sh
# Usage:
#   For Nova installation: ./nova-setup.sh <repo-url> [branch]
#   For generic submodule: ./nova-setup.sh submodule <repo-url> <submodule-path> [branch_or_tag]

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to check if a path is a submodule (strict match)
is_submodule() {
    git config --file .gitmodules --get-regexp path | awk '{print $2}' | grep -Fxq "$1"
}

# Function to setup a generic submodule
setup_generic_submodule() {
    local REPO_URL=$1
    local SUBMODULE_PATH=$2
    local BRANCH=${3:-main}

    if [ -z "$REPO_URL" ] || [ -z "$SUBMODULE_PATH" ]; then
        echo -e "${RED}Error: Repository URL and submodule path are required.${NC}"
        echo "Usage: $0 submodule <repo-url> <submodule-path> [branch_or_tag]"
        exit 1
    fi

    echo -e "\n${CYAN}🌐 Generic Submodule Setup${NC}"
    echo "================================="
    echo -e "${YELLOW}➡️  Preparing to add submodule from $REPO_URL into $SUBMODULE_PATH (branch/tag: $BRANCH)${NC}"

    # Clean up existing folder/submodule if present
    if is_submodule "$SUBMODULE_PATH"; then
        echo -e "${YELLOW}⚠️  Submodule already exists at $SUBMODULE_PATH — removing cleanly...${NC}"
        git submodule deinit -f "$SUBMODULE_PATH" || true
        git rm -f "$SUBMODULE_PATH" || true
        rm -rf ".git/modules/$SUBMODULE_PATH"
        git commit -m "Removed existing submodule at $SUBMODULE_PATH" || true
    elif [ -d "$SUBMODULE_PATH" ]; then
        echo -e "${YELLOW}⚠️  Directory $SUBMODULE_PATH already exists — removing...${NC}"
        rm -rf "$SUBMODULE_PATH"
    fi

    # Add the new submodule
    echo -e "${YELLOW}➡️  Adding submodule...${NC}"
    git submodule add -b "$BRANCH" "$REPO_URL" "$SUBMODULE_PATH" || git submodule add "$REPO_URL" "$SUBMODULE_PATH"

    # Initialize
    git submodule update --init --recursive -f "$SUBMODULE_PATH"

    # Checkout specific version
    cd "$SUBMODULE_PATH"
    echo -e "${YELLOW}➡️  Checking out $BRANCH...${NC}"
    git fetch --tags origin
    # Try to checkout as a tag or branch
    git checkout "$BRANCH" || git checkout -b "$BRANCH" origin/"$BRANCH" || echo "Could not checkout $BRANCH, staying on default"
    cd - > /dev/null

    # Stage the changes
    git add .gitmodules "$SUBMODULE_PATH"

    echo -e "${GREEN}✅ Generic submodule setup complete.${NC}"
    echo -e "   Submodule ready at: ${CYAN}$SUBMODULE_PATH${NC}"
    echo -e "   Don't forget to commit the changes!"
}

# Function to setup Nova installation
setup_nova_installation() {
    local REPO_URL=$1
    local BRANCH=${2:-main}

    if [ -z "$REPO_URL" ]; then
        echo -e "${RED}Error: Repository URL is required.${NC}"
        echo "Usage: $0 <repo-url> [branch]"
        exit 1
    fi

    echo -e "\n${CYAN}🌟 Nova.UI Advanced Installation${NC}"
    echo "================================="

    # --- Step 1: Initialize Hidden Submodule ---
    echo -e "\n${BLUE}[1/4] 📦 Initializing Nova Core...${NC}"
    CORE_DIR=".nova-core"

    # Check if .nova-core exists as a submodule
    if is_submodule "$CORE_DIR"; then
        echo -e "${YELLOW}  • Updating existing core...${NC}"
        git submodule update --remote "$CORE_DIR"
    else
        echo -e "${YELLOW}  • Adding hidden submodule...${NC}"
        # Add submodule but keep it quiet
        git submodule add -f -b "$BRANCH" "$REPO_URL" "$CORE_DIR" > /dev/null 2>&1
        git submodule update --init --recursive > /dev/null 2>&1
    fi

    if [ ! -d "$CORE_DIR" ]; then
        echo -e "${RED}❌ Failed to initialize submodule.${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Core initialized.${NC}"

    # --- Step 2: Analyze & Install Dependencies ---
    echo -e "\n${BLUE}[2/4] 🔌 Installing Dependencies...${NC}"

    # Define core dependencies
    DEPS="class-variance-authority clsx tailwind-merge lucide-react @radix-ui/react-slot framer-motion gsap zod react-hook-form @hookform/resolvers next-themes sonner"

    # Check for package manager
    if command -v pnpm &> /dev/null; then
        CMD="pnpm add"
    elif command -v yarn &> /dev/null; then
        CMD="yarn add"
    else
        CMD="npm install"
    fi

    echo -e "${YELLOW}  • Installing: $DEPS${NC}"
    $CMD $DEPS > /dev/null 2>&1
    echo -e "${GREEN}✅ Dependencies installed.${NC}"

    # --- Step 3: Sync Components (No Build - Direct Copy) ---
    echo -e "\n${BLUE}[3/4] 📦 Syncing Component Library...${NC}"

    DEST_DIR="components/nova"
    THEME_FILE="components/theme-provider.tsx"

    mkdir -p "$DEST_DIR"

    echo -e "${YELLOW}  • Copying components (direct sync)...${NC}"

    # Copy all nova components (direct copy - no build process)
    if command -v rsync &> /dev/null; then
        rsync -av --exclude='*.test.tsx' --exclude='*.stories.tsx' "$CORE_DIR/components/nova/" "$DEST_DIR/" > /dev/null
    else
        cp -r "$CORE_DIR/components/nova/"* "$DEST_DIR/"
    fi

    # Copy theme provider
    echo -e "${YELLOW}  • Copying theme provider (direct sync)...${NC}"
    cp "$CORE_DIR/components/theme-provider.tsx" "$THEME_FILE"

    echo -e "${GREEN}✅ Components synced to $DEST_DIR${NC}"

    # --- Step 4: Cleanup & Finalize ---
    echo -e "\n${BLUE}[4/4] ✨ Finalizing...${NC}"

    # Ensure .gitignore ignores the hidden core
    if ! grep -q "$CORE_DIR" .gitignore; then
        echo "$CORE_DIR" >> .gitignore
        echo -e "${YELLOW}  • Added $CORE_DIR to .gitignore${NC}"
    fi

    echo -e "\n${GREEN}🎉 Nova.UI is ready!${NC}"
    echo -e "   • Components: ${CYAN}$DEST_DIR${NC}"
    echo -e "   • Theme:      ${CYAN}$THEME_FILE${NC}"
    echo -e "   • Core:       ${CYAN}$CORE_DIR${NC} (Hidden Managed Submodule)"
    echo -e "\nTo update, simply run this script again."
}

# Main execution
if [ "$1" = "submodule" ]; then
    # Generic submodule mode
    shift
    setup_generic_submodule "$@"
else
    # Nova installation mode (default)
    setup_nova_installation "$@"
fi