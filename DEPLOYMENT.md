# 🚀 Deploy to GitHub Pages - Step by Step

## What I've Set Up:
✅ GitHub Actions workflow that automatically builds and deploys your React app
✅ Configured for HashRouter (works with GitHub Pages)
✅ Set homepage to: https://dakshit2012.github.io/Dakshitjain-Restraunt

## Steps to Deploy:

### 1. Push to GitHub (via Emergent)
Click the "Push to GitHub" button in Emergent to push all changes.

### 2. Enable GitHub Pages (One-time setup)
1. Go to: https://github.com/dakshit2012/Dakshitjain-Restraunt/settings/pages
2. Under **"Build and deployment"** > **Source**: Select **"Deploy from a branch"**
3. **Branch**: Select **`gh-pages`** > Folder **`/ (root)`**
4. Click **Save**

### 3. Enable GitHub Actions Permissions
1. Go to: https://github.com/dakshit2012/Dakshitjain-Restraunt/settings/actions
2. Scroll down to **"Workflow permissions"**
3. Select **"Read and write permissions"**
4. Click **Save**

### 4. Wait for Deployment
1. Go to: https://github.com/dakshit2012/Dakshitjain-Restraunt/actions
2. You'll see "Deploy to GitHub Pages" running
3. Wait 2-3 minutes for it to complete (green checkmark ✅)

### 5. Visit Your Live Site!
🎉 **https://dakshit2012.github.io/Dakshitjain-Restraunt/**

---

## Future Updates:
Every time you push code from Emergent to GitHub, the workflow will automatically:
1. Build your React app
2. Deploy to GitHub Pages
3. Update your live site

**No manual commands needed!** 🚀

---

## Troubleshooting:

### If workflow fails:
1. Check the **Actions** tab for error messages
2. Make sure repository permissions are set correctly (Step 3 above)

### If site shows blank page:
- Make sure GitHub Pages is enabled on `gh-pages` branch (Step 2)
- Clear browser cache and refresh

### If 404 error:
- Verify the homepage URL in package.json matches your repo
- Make sure GitHub Actions completed successfully
