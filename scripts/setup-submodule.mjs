import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const RED = '\x1b[31m';

const log = (msg) => console.log(`${GREEN}${msg}${RESET}`);
const warn = (msg) => console.log(`${YELLOW}${msg}${RESET}`);
const info = (msg) => console.log(`${CYAN}${msg}${RESET}`);
const error = (msg) => console.log(`${RED}${msg}${RESET}`);

const scriptDir = __dirname;
// Assuming structure: host/nova-ui/scripts/setup-submodule.mjs
// nova-ui package.json
const novaPackageJsonPath = path.resolve(scriptDir, '../package.json');

// Helper to find host package.json by walking up the tree
function findHostPackageJson(startDir) {
  let currentDir = startDir;
  while (currentDir !== path.parse(currentDir).root) {
    const pkgPath = path.join(currentDir, 'package.json');
    if (fs.existsSync(pkgPath)) {
      // Avoid detecting Nova's own package.json if the script is somehow running from within
      if (pkgPath !== novaPackageJsonPath) {
        return pkgPath;
      }
    }
    currentDir = path.dirname(currentDir);
  }
  return null;
}

// Start searching from two levels up (parent of nova-ui folder)
const hostPackageJsonPath = findHostPackageJson(path.resolve(scriptDir, '../../'));

async function main() {
  console.log('\n');
  log('🚀 Nova UI Setup Script');
  console.log('=====================\n');

  if (!fs.existsSync(novaPackageJsonPath)) {
    error(`❌ Could not find Nova UI package.json at ${novaPackageJsonPath}`);
    process.exit(1);
  }

  // Detect if running in host
  const isSubmodule = fs.existsSync(hostPackageJsonPath);
  if (!isSubmodule || !hostPackageJsonPath) {
    warn('⚠️  Could not find host package.json in parent directory.');
    warn('Assuming this is not running as a submodule or the structure is different.');
    // We can still proceed to show what would be installed, or just exit.
    // But for testing purposes inside the repo, we might want to skip installation.
  }

  // Read nova package.json
  const novaPkg = JSON.parse(fs.readFileSync(novaPackageJsonPath, 'utf-8'));
  // Include peerDependencies as well, as they are often required
  const dependencies = {
    ...(novaPkg.dependencies || {}),
    ...(novaPkg.peerDependencies || {})
  };
  
  // Read Host Package if available to compare
  let hostPkg = {};
  if (isSubmodule) {
    try {
      hostPkg = JSON.parse(fs.readFileSync(hostPackageJsonPath, 'utf-8'));
    } catch (e) {
      warn('⚠️  Could not read host package.json');
    }
  }
  
  const hostDeps = {
    ...(hostPkg.dependencies || {}),
    ...(hostPkg.devDependencies || {})
  };

  const depsToInstall = [];
  const missingDeps = [];
  const versionMismatchDeps = [];

  Object.keys(dependencies).forEach(dep => {
    // Exclude core frameworks and dev tools
    if (['react', 'react-dom', 'next', 'typescript'].includes(dep)) return;
    if (dep.startsWith('@types/')) return;
    if (dep.startsWith('eslint')) return;
    if (['postcss', 'autoprefixer', 'tailwindcss', '@tailwindcss/postcss'].includes(dep)) return;
    if (dep === 'sharp') return; // usually optional or platform specific
    if (dep === 'prism-react-renderer') return; // docs only
    if (dep === '@vercel/analytics') return; // docs only

    const requiredVersion = dependencies[dep];
    const hostVersion = hostDeps[dep];
    // Use quotes to safely handle special characters in version ranges
    const installStr = `"${dep}@${requiredVersion}"`;

    if (!hostVersion) {
        missingDeps.push(dep);
        depsToInstall.push(installStr);
    } else if (hostVersion !== requiredVersion) {
        // If host has different version, we suggest update/install
        // We track it to inform the user
        versionMismatchDeps.push(`${dep} (Host: ${hostVersion} -> Nova: ${requiredVersion})`);
        depsToInstall.push(installStr);
    }
  });

  if (depsToInstall.length === 0) {
    log('✅ All Nova UI dependencies are already satisfied.');
    // Still show config suggestions just in case? 
    // Usually if deps are done, we might want to skip config spam, 
    // but users might want to see it. Let's show it if requested or maybe just exit.
    // For now, let's exit to keep it clean, as re-running usually implies checking deps.
    return;
  }

  info(`📦 Dependency Check Results:`);
  if (missingDeps.length > 0) {
      console.log(`${YELLOW}🆕 Missing Dependencies:${RESET}`);
      console.log(missingDeps.map(d => `   - ${d}`).join('\n'));
  }
  if (versionMismatchDeps.length > 0) {
      console.log(`${YELLOW}🔄 Version Mismatches (will be updated):${RESET}`);
      console.log(versionMismatchDeps.map(d => `   - ${d}`).join('\n'));
  }
  console.log('\n');

  if (!isSubmodule || !hostPackageJsonPath) {
    warn('ℹ️  Skipping installation because host package.json was not found.');
    return;
  }

  // Detect package manager
  let pm = 'npm';
  const hostDir = path.dirname(hostPackageJsonPath);
  
  if (fs.existsSync(path.resolve(hostDir, 'yarn.lock'))) pm = 'yarn';
  else if (fs.existsSync(path.resolve(hostDir, 'pnpm-lock.yaml'))) pm = 'pnpm';
  else if (fs.existsSync(path.resolve(hostDir, 'bun.lockb'))) pm = 'bun';

  info(`Detected package manager: ${pm}`);

  const args = process.argv.slice(2);
  const isCI = process.env.CI || process.env.CONTINUOUS_INTEGRATION;
  const autoConfirm = args.includes('-y') || args.includes('--yes') || isCI;

  const runInstall = () => {
    log(`\nRunning installation with ${pm}...`);
    
    let cmd = '';
    if (pm === 'npm') cmd = `npm install ${depsToInstall.join(' ')}`;
    else if (pm === 'yarn') cmd = `yarn add ${depsToInstall.join(' ')}`;
    else if (pm === 'pnpm') cmd = `pnpm add ${depsToInstall.join(' ')}`;
    else if (pm === 'bun') cmd = `bun add ${depsToInstall.join(' ')}`;
    
    try {
      execSync(cmd, { stdio: 'inherit', cwd: hostDir });
      console.log('\n');
      log('✅ Dependencies installed successfully!');
      
      console.log('\n✨ Suggested Configuration Updates:');

      // 1. Tailwind Config
      const submoduleRelativePath = path.relative(hostDir, path.resolve(scriptDir, '..'));
      const tailwindContent = `"${submoduleRelativePath}/components/**/*.{ts,tsx}"`;
      
      console.log(`${CYAN}1. Update your tailwind configuration to include Nova UI components:${RESET}`);
      console.log(`   Add this to your content array: ${YELLOW}${tailwindContent}${RESET}`);
      
      // 2. TSConfig
      console.log(`\n${CYAN}2. (Optional) Add path alias in tsconfig.json:${RESET}`);
      console.log(`   "paths": {`);
      console.log(`     "${YELLOW}@nova-ui/*${RESET}": ["${YELLOW}./${submoduleRelativePath}/*${RESET}"]`);
      console.log(`   }`);

      console.log('\n🎉 Nova UI is ready to use!');
      console.log('   Import components: import { Button } from "nova-ui";');
      console.log('   Use theme: import { ThemeProvider } from "nova-ui/theme-provider";');
      
    } catch (e) {
      error('❌ Installation failed.');
      console.error(e.message);
    }
  };

  if (autoConfirm) {
    info('ℹ️  Non-interactive mode detected (CI or --yes flag). Automatically installing dependencies.');
    runInstall();
    return;
  }

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`\n❓ Do you want to install/update these dependencies using ${pm}? (Y/n) `, (answer) => {
    rl.close();
    if (answer.toLowerCase() === 'n') {
      log('Skipping installation.');
      return;
    }
    runInstall();
  });
}

main();
