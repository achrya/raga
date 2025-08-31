# 🚀 GitHub Pages Setup Guide

## ✅ What's Already Done

1. **GitHub Actions Workflow** - Created `.github/workflows/deploy.yml`
2. **Angular Configuration** - Updated `angular.json` with output path
3. **Build Scripts** - Added production build commands to `package.json`
4. **Automatic Deployment** - Setup to deploy on every push to master

## 🔧 Manual Setup Steps (Required)

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/achrya/raga`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 2: Check GitHub Actions Status

1. Go to **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-5 minutes)

### Step 3: Access Your Live App

Once deployment is complete, your app will be available at:
```
https://achrya.github.io/raga/
```

## 🛠️ Local Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build:prod

# Build and watch for changes
npm run watch

# Run tests
npm test
```

## 📁 Build Output

Your built app will be in:
```
dist/acharya/browser/
```

## 🔄 Automatic Deployment

- **Every push to master** triggers automatic deployment
- **No manual intervention** required
- **GitHub Actions** handles the entire process

## 🚨 Troubleshooting

### If GitHub Pages shows 404:
1. Check if the workflow completed successfully
2. Verify the repository has Pages enabled
3. Wait a few minutes for changes to propagate

### If build fails:
1. Check the Actions tab for error details
2. Verify all dependencies are installed
3. Test local build with `npm run build:prod`

### Bundle size warnings:
- Current bundle is ~544KB (slightly over 500KB budget)
- This is normal for Bootstrap + custom fonts
- Can be optimized later if needed

## 🌐 Custom Domain (Optional)

To use a custom domain:
1. Add `CNAME` file in `projects/acharya/src/assets/`
2. Configure DNS settings
3. Update GitHub Pages settings

## 📱 Features

- ✅ Responsive Bootstrap design
- ✅ Custom font system
- ✅ Mobile-friendly navigation
- ✅ Modern landing page
- ✅ Automatic deployment
- ✅ SEO optimized

Your app is now ready for production deployment! 🎉
