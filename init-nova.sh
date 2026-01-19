#!/bin/bash

# Nova UI Initialization Script
# This script sets up the environment for Nova UI when used as a submodule.

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}
  _   _                  _   _ ___ 
 | \ | | _____   ____ _ | | | |_ _|
 |  \| |/ _ \ \ / / _\` || | | || | 
 | |\  | (_) \ V / (_| || |_| || | 
 |_| \_|\___/ \_/ \__,_| \___/|___|
                                   
${NC}"
echo -e "${BLUE}🚀 Initializing Nova UI...${NC}"

# Ensure Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js to proceed.${NC}"
    exit 1
fi

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Run the Node.js setup script
echo -e "${BLUE}📦 Running setup script...${NC}"
node "$SCRIPT_DIR/scripts/setup-submodule.mjs"
