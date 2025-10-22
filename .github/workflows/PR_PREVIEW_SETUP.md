# PR Preview Setup Instructions

This repository is configured to automatically deploy pull request previews using **GitHub Pages**.

## ✅ No Setup Required!

Unlike external services (like Surge.sh), this uses GitHub Pages which requires **no tokens or secrets**. It just works! 🎉

## How It Works

The workflow automatically:

1. 🔍 Triggers on every pull request (opened, updated, reopened, or closed)
2. 🏗️ Builds your Next.js site and exports it as static files
3. 🚀 Deploys to the `gh-pages` branch under `pr-preview/pr-{number}/`
4. 💬 Automatically comments on the PR with the preview URL
5. 🔄 Updates the preview when new commits are pushed
6. 🧹 Automatically removes the preview when the PR is closed

## Preview URL Format

Each PR gets its own unique URL based on your GitHub Pages domain:

**If your repo is:** `github.com/username/webtres`

Then previews will be at:
- PR #1: `https://username.github.io/webtres/pr-preview/pr-1/`
- PR #42: `https://username.github.io/webtres/pr-preview/pr-42/`
- PR #123: `https://username.github.io/webtres/pr-preview/pr-123/`

## First-Time Setup

The workflow should work automatically, but you need to ensure GitHub Pages is enabled:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `/ (root)`
4. Click **Save**

GitHub Pages should already be configured if you have the main site deploying!

## Cleanup

✨ **Automatic cleanup!** When a PR is closed or merged, the preview is automatically removed from the `gh-pages` branch.

No manual cleanup needed!

## Troubleshooting

### "Error: Resource not accessible by integration"
- Make sure the workflow has `contents: write` permissions (already configured)
- Check that Actions have permission to create/modify the `gh-pages` branch

### "Build failed"
- Check that the Next.js build completes successfully locally: `npm run build && npx next export`
- Review the workflow logs in the Actions tab

### Preview URL shows 404
- Wait a few minutes for GitHub Pages to build and deploy
- Verify GitHub Pages is enabled in Settings → Pages
- Check that the `gh-pages` branch exists and has content

### Multiple PRs interfering with each other
- The workflow uses `concurrency` groups to prevent this
- Each PR has its own isolated directory

