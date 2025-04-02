
#!/usr/bin/env node

/**
 * This script updates the base path in vite.config.ts before building
 * It should be run before the npm run build command when deploying to GitHub Pages
 */

const fs = require('fs');
const path = require('path');

// Get repository name from package.json or git
function getRepoName() {
  try {
    // Try to get from git
    const gitConfigPath = path.resolve('.git/config');
    if (fs.existsSync(gitConfigPath)) {
      const gitConfig = fs.readFileSync(gitConfigPath, 'utf8');
      const urlMatch = gitConfig.match(/url = .*github\.com[:/](.*?)\.git/);
      if (urlMatch && urlMatch[1]) {
        const parts = urlMatch[1].split('/');
        return parts[parts.length - 1];
      }
    }
  } catch (e) {
    console.error('Could not extract repo name from git config:', e.message);
  }
  
  // Default to portfolio if we can't detect the repo name
  return 'portfolio';
}

const repoName = getRepoName();
const viteConfigPath = path.resolve('vite.config.ts');

if (fs.existsSync(viteConfigPath)) {
  let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Replace the placeholder with the actual repo name
  viteConfig = viteConfig.replace(
    "base: process.env.NODE_ENV === 'production' ? '/{repo-name}/' : '/',",
    `base: process.env.NODE_ENV === 'production' ? '/${repoName}/' : '/',`
  );
  
  fs.writeFileSync(viteConfigPath, viteConfig);
  console.log(`Updated vite.config.ts with base path: /${repoName}/`);
} else {
  console.error('Could not find vite.config.ts file');
  process.exit(1);
}
