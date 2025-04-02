
#!/usr/bin/env node

/**
 * This script updates the base path in vite.config.ts before building
 * It should be run before the npm run build command when deploying to GitHub Pages
 */

const fs = require('fs');
const path = require('path');

// Get repository name from git or environment
function getRepoName() {
  try {
    // First try to get from environment variables (for GitHub Actions)
    if (process.env.GITHUB_REPOSITORY) {
      return process.env.GITHUB_REPOSITORY.split('/')[1];
    }
    
    // Try to get from git
    const gitConfigPath = path.resolve('.git/config');
    if (fs.existsSync(gitConfigPath)) {
      const gitConfig = fs.readFileSync(gitConfigPath, 'utf8');
      
      // Try different patterns of GitHub URLs
      const patterns = [
        /url = .*github\.com[:/](.*?)\.git/,
        /url = .*github\.com[:/](.*?)(?:\.git)?$/,
        /url = .*github\.com\/([^\/]+\/[^\/]+)/
      ];
      
      for (const pattern of patterns) {
        const match = gitConfig.match(pattern);
        if (match && match[1]) {
          const parts = match[1].split('/');
          return parts[parts.length - 1];
        }
      }
    }
  } catch (e) {
    console.error('Could not extract repo name from git config:', e.message);
  }
  
  // Default to portfolio if we can't detect the repo name
  console.warn('Could not detect repository name, using "portfolio" as fallback');
  return 'portfolio';
}

const repoName = getRepoName();
console.log(`Detected repository name: ${repoName}`);

const viteConfigPath = path.resolve('vite.config.ts');

if (fs.existsSync(viteConfigPath)) {
  let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Replace the placeholder or old value with the actual repo name
  if (viteConfig.includes('/{repo-name}/')) {
    viteConfig = viteConfig.replace(
      "base: process.env.NODE_ENV === 'production' ? '/{repo-name}/' : '/',",
      `base: process.env.NODE_ENV === 'production' ? '/${repoName}/' : '/',`
    );
  } else {
    // If the pattern doesn't exist, check if base is already defined and update it
    if (viteConfig.includes("base: process.env.NODE_ENV === 'production'")) {
      viteConfig = viteConfig.replace(
        /base: process.env.NODE_ENV === 'production' \? '\/.*?\/' : '\/'/,
        `base: process.env.NODE_ENV === 'production' ? '/${repoName}/' : '/'`
      );
    }
  }
  
  fs.writeFileSync(viteConfigPath, viteConfig);
  console.log(`Updated vite.config.ts with base path: /${repoName}/`);
} else {
  console.error('Could not find vite.config.ts file');
  process.exit(1);
}
