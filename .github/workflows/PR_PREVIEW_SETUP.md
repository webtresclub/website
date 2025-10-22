# PR Preview Setup Instructions

This repository is configured to automatically deploy pull request previews to Surge.sh.

## ⚠️ Setup Required

**The PR preview workflow will fail until you add the Surge token!**

To enable PR previews, you need to add a Surge token to your GitHub repository secrets:

### Step 1: Get your Surge token

1. Install Surge globally (if you haven't already):
   ```bash
   npm install -g surge
   ```

2. Login to Surge (or create an account):
   ```bash
   surge login
   ```
   Follow the prompts to login or create a new account with your email.

3. Get your Surge token:
   ```bash
   surge token
   ```
   This will display your token. Copy it!

### Step 2: Add the token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `SURGE_TOKEN`
5. Value: Paste the token you copied from step 1
6. Click **Add secret**

## How It Works

Once configured, the workflow will:

1. 🔍 Trigger on every pull request (opened, updated, or reopened)
2. 🏗️ Build your Next.js site and export it as static files
3. 🚀 Deploy to Surge with a unique URL: `pr-{number}-webtres.surge.sh`
4. 💬 Comment on the PR with the preview URL
5. 🔄 Update the comment when new commits are pushed

## Preview URL Format

Each PR gets its own unique URL:
- PR #1: `https://pr-1-webtres.surge.sh`
- PR #42: `https://pr-42-webtres.surge.sh`
- PR #123: `https://pr-123-webtres.surge.sh`

## Cleanup

Preview deployments remain active until you manually remove them or update surge settings. To remove a preview:

```bash
surge teardown pr-{number}-webtres.surge.sh
```

## Troubleshooting

### "Error: Not authorized"
- Make sure you've added the `SURGE_TOKEN` secret correctly
- Verify the token is still valid by running `surge token` locally

### "Build failed"
- Check that the Next.js build completes successfully locally with `npm run build && npm run export`
- Review the workflow logs in the Actions tab

### Preview URL not accessible
- Surge free tier has rate limits. Wait a few minutes and try again
- Check if the domain is already taken by running `surge list`

