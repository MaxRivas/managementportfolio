# GitHub Pages Deployment Guide

## Quick Setup for GitHub Pages

### 1. Repository Setup
Your Astro site is configured for GitHub Pages deployment with:
- **Site URL**: `https://maxrivas.github.io`
- **Base Path**: `/managementportfolio`
- **GitHub Actions**: Automated build and deployment

### 2. Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **"GitHub Actions"**
5. Save the settings

### 3. Deploy Your Site
```bash
# Add all files to git
git add .

# Commit the changes
git commit -m "Add GitHub Pages deployment configuration"

# Push to main branch (this triggers deployment)
git push origin main
```

### 4. Access Your Live Site
After deployment completes (usually 2-5 minutes), your site will be available at:
```
https://maxrivas.github.io/managementportfolio
```

## How It Works

1. **GitHub Actions Workflow**: The `.github/workflows/deploy.yml` file contains the automation
2. **Astro Integration**: Uses the official `withastro/action@v2` for optimized builds
3. **Automatic Deployment**: Every push to `main` branch triggers a new deployment
4. **Static Files**: Astro builds your site into static HTML/CSS/JS files
5. **GitHub Pages Hosting**: GitHub serves the static files to visitors

## Troubleshooting

### Common Issues:
- **404 Page**: Make sure GitHub Pages is enabled and source is set to "GitHub Actions"
- **Build Fails**: Check the Actions tab for error details
- **Assets Not Loading**: Verify the `base` path in `astro.config.mjs` matches your repository name

### Check Deployment Status:
1. Go to your repository
2. Click the **Actions** tab
3. View the latest workflow run
4. Check for any errors in the build process

## Benefits for Visitors

✅ **No Build Required**: Visitors access a fast, static website
✅ **Automatic Updates**: Changes deploy automatically when you push code
✅ **Free Hosting**: GitHub Pages provides free hosting for public repositories
✅ **Custom Domain**: Can add a custom domain later if desired
✅ **Fast Loading**: Static site generation ensures optimal performance

## Updating Your Portfolio

To update your portfolio:
1. Edit files locally (especially `src/data/info.ts` for personal information)
2. Test with `npm run dev`
3. Commit and push changes to `main` branch
4. GitHub automatically rebuilds and deploys your site

Your management portfolio will be live and accessible to visitors without them needing to build anything!