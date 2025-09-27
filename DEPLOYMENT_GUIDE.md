# SparkPoint Website Deployment Guide

This guide covers multiple ways to deploy your SparkPoint strategic recruitment marketing website to make it accessible online.

## Quick Start - Build Your Site

Before deploying, you need to build your site for production:

```bash
npm run build
```

This creates a `dist` folder with all the optimized files ready for deployment.

## Deployment Options

### 1. Vercel (Recommended - Free & Easy)

**Why Vercel:** Perfect for React/Vite apps, free tier, automatic deployments from GitHub.

**Steps:**
1. Push your code to GitHub (if not already done)
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "New Project" and import your repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy" - your site will be live in ~1 minute
6. You'll get a free `.vercel.app` domain, or you can add your custom domain

**Build Settings (auto-detected):**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 2. Netlify (Great Alternative - Free)

**Why Netlify:** Excellent for static sites, great free tier, easy custom domains.

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop your `dist` folder to deploy instantly, OR
3. Connect your GitHub repository for automatic deployments
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### 3. GitHub Pages (Free with GitHub)

**Why GitHub Pages:** Free hosting directly from your GitHub repository.

**Steps:**
1. Install the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Set your repository's base URL in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repository-name/',
     // ... other config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in your repository settings (Settings > Pages > Source: gh-pages branch)

### 4. Custom Domain Setup

Once deployed on any platform, you can add your custom domain:

**For Vercel:**
1. Go to your project dashboard
2. Click "Domains" tab
3. Add your domain and follow DNS instructions

**For Netlify:**
1. Go to Site settings > Domain management
2. Add custom domain and configure DNS

**DNS Records you'll typically need:**
- A record pointing to your hosting provider's IP
- CNAME record for www subdomain
- Or CNAME record pointing to your hosting provider's domain

## Environment Variables

If you add any environment variables later, make sure to set them in your hosting platform:

**Vercel:** Project Settings > Environment Variables
**Netlify:** Site Settings > Environment Variables
**GitHub Pages:** Use GitHub Secrets for Actions

## Performance Optimization

Your site is already optimized with:
- ✅ Vite build optimization
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Modern CSS with Tailwind
- ✅ Optimized fonts (Inter from Google Fonts)

## Monitoring & Analytics

Consider adding:
- Google Analytics for visitor tracking
- Vercel Analytics (if using Vercel)
- Hotjar for user behavior insights

## Custom Domain Examples

Once deployed, your site could be accessible at:
- `sparkpoint.com` (your custom domain)
- `www.sparkpoint.com`
- `sparkpoint-marketing.vercel.app` (Vercel subdomain)
- `sparkpoint-agency.netlify.app` (Netlify subdomain)

## Next Steps After Deployment

1. **Test thoroughly** - Check all pages and forms work correctly
2. **Set up analytics** - Track visitor behavior and conversions
3. **Configure contact forms** - Ensure HubSpot forms are working
4. **SEO optimization** - Add meta tags, sitemap, etc.
5. **Performance monitoring** - Use tools like PageSpeed Insights

## Troubleshooting

**Build fails?**
- Check all dependencies are installed: `npm install`
- Ensure all imports are correct
- Check for TypeScript errors: `npm run lint`

**Site loads but shows blank page?**
- Check browser console for errors
- Verify asset paths are correct
- Ensure base URL is set correctly for subdirectory deployments

**Forms not working?**
- Verify HubSpot script is loading
- Check network tab for form submission errors
- Ensure CORS settings allow your domain

Need help with any specific deployment option? The Vercel option is usually the smoothest for React applications like yours.