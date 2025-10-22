# Local Testing Guide for GitHub Pages

## 🧪 Testing Strategy

Since your site uses GitHub Pages with a base path (`/managementportfolio`), you need to test both locally and in a GitHub Pages-like environment before merging to main.

## 🚀 Development Workflow

### 1. **Daily Development** (Recommended)
```bash
# Start development server (no base path, easier for development)
npm run dev

# Opens at: http://localhost:4321/
```
This uses `astro.config.local.mjs` without the base path for easier development.

### 2. **Pre-Merge Testing** (Required before pushing to main)
```bash
# Test exactly like GitHub Pages (with base path)
npm run test:github

# Opens at: http://localhost:4321/managementportfolio/
```
This tests with the exact same configuration that GitHub Pages will use.

## 📋 Complete Testing Checklist

Before merging to main branch, run through this checklist:

### ✅ **Step 1: Local Development Testing**
```bash
npm run dev
```
- [ ] Homepage loads correctly
- [ ] Navigation works (Home, Projects)
- [ ] All images load properly
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive design looks good
- [ ] Projects page displays all projects
- [ ] Contact links work correctly

### ✅ **Step 2: GitHub Pages Simulation**
```bash
npm run test:github
```
- [ ] Site loads at `http://localhost:4321/managementportfolio/`
- [ ] All navigation links include base path
- [ ] Images load with correct paths
- [ ] CSS and JS files load properly
- [ ] All internal links work correctly
- [ ] Sitemap generates with correct URLs

### ✅ **Step 3: Build Verification**
```bash
npm run build:github
```
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No missing asset warnings
- [ ] Output files created in `dist/` folder

## 🔄 Git Workflow with Testing

### Feature Development Branch Workflow:
```bash
# 1. Create feature branch
git checkout -b feature/your-feature-name

# 2. Make your changes
# Edit files in src/data/info.ts, components, etc.

# 3. Test during development
npm run dev
# Verify changes look good

# 4. Test GitHub Pages compatibility
npm run test:github
# Verify everything works with base path

# 5. Build test
npm run build:github
# Ensure no build errors

# 6. Commit and push feature branch
git add .
git commit -m "Add new feature"
git push origin feature/your-feature-name

# 7. Create Pull Request on GitHub
# Review changes in PR before merging to main
```

### Quick Fix Workflow:
```bash
# 1. Make changes on current branch
# Edit your files

# 2. Quick test
npm run test:github

# 3. If tests pass, commit and push
git add .
git commit -m "Quick fix: description"
git push origin main  # Only if you're confident!
```

## 🛠️ Available Scripts

| Script | Purpose | URL | When to Use |
|--------|---------|-----|-------------|
| `npm run dev` | Local development | `localhost:4321/` | Daily development |
| `npm run dev:github` | GitHub Pages dev mode | `localhost:4321/managementportfolio/` | Testing base path |
| `npm run build` | Local build | - | Testing local build |
| `npm run build:github` | GitHub Pages build | - | Pre-merge testing |
| `npm run preview` | Preview local build | `localhost:4321/` | Local build preview |
| `npm run preview:github` | Preview GitHub build | `localhost:4321/managementportfolio/` | GitHub build preview |
| `npm run test:local` | Full local test | `localhost:4321/` | Complete local testing |
| `npm run test:github` | Full GitHub test | `localhost:4321/managementportfolio/` | **Pre-merge required** |

## 🚨 Common Issues and Solutions

### Issue: Links don't work in GitHub preview mode
**Solution**: Make sure all internal links in your components use relative paths or Astro's built-in link handling.

### Issue: Images not loading in preview mode
**Solution**: Check that image paths in `src/data/info.ts` don't start with `/` - use relative paths like `assets/images/...`

### Issue: CSS not applying correctly
**Solution**: Clear your browser cache or use incognito mode when testing.

### Issue: Build fails with TypeScript errors
**Solution**: Run `npm run dev` first to see TypeScript errors in development mode, fix them, then build.

## 💡 Pro Tips

1. **Always test `npm run test:github` before merging to main**
2. **Use feature branches for significant changes**
3. **Test on different devices/screen sizes**
4. **Check the browser console for any JavaScript errors**
5. **Verify all forms and interactive elements work**
6. **Test both light and dark modes**

## 🔍 Debugging Deployment Issues

If your GitHub Pages deployment fails:

1. **Check GitHub Actions tab** in your repository
2. **Review build logs** for specific error messages  
3. **Test locally first** with `npm run test:github`
4. **Verify all assets exist** in the `public/` folder
5. **Check for case-sensitive file naming** issues

This workflow ensures your changes work perfectly before going live on GitHub Pages!