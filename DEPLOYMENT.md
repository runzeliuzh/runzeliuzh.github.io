# Deployment Guide - GitHub Pages

## 🚀 Free Deployment Options

### Option 1: GitHub Actions (Automated) - RECOMMENDED ✅

This method automatically deploys your site whenever you push to GitHub.

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add portfolio with projects"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages" 
   - Under "Source", select "GitHub Actions"
   - Your site will be available at: `https://runzeliuzh.github.io/devfolio`

3. **That's it!** The GitHub Action will automatically:
   - Install dependencies
   - Build your Gatsby site
   - Deploy to GitHub Pages
   - Future pushes will auto-deploy

### Option 2: Manual Deployment with gh-pages

If you prefer manual control:

```bash
# Build and deploy in one command
npm run deploy

# Or step by step:
npm run build
npx gh-pages -d public
```

---

## 🔧 Configuration Already Set Up

✅ **GitHub Actions workflow** (`.github/workflows/deploy.yml`)
✅ **Path prefix configuration** (`pathPrefix: "/devfolio"`)
✅ **Deployment scripts** in `package.json`
✅ **Site URL updated** for GitHub Pages

---

## 📝 Next Steps

1. **Create GitHub Repository** (if not done):
   ```bash
   # If you haven't initialized git yet:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/runzeliuzh/devfolio.git
   git push -u origin main
   ```

2. **Update Personal Information:**
   - Replace placeholder GitHub URLs in project pages
   - Add your actual performance metrics
   - Update any remaining placeholder content

3. **Custom Domain (Optional):**
   - If you have a custom domain, add a `CNAME` file to `/static/`
   - Update `siteUrl` in `gatsby-config.js`

---

## 🌐 Your Site URLs

- **GitHub Pages URL:** https://runzeliuzh.github.io/devfolio
- **Local Development:** http://localhost:8000

---

## 🆓 Other Free Alternatives

If you want to try other platforms:

### Netlify (Also free, very popular)
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `public`
4. Auto-deploys on push

### Vercel (Also free, great for React/Next.js)
1. Import your GitHub repo
2. Framework preset: Gatsby
3. Auto-deploys on push

---

## 🛠️ Troubleshooting

**Build Errors?**
- Run `npm run build` locally first to test
- Check console for any missing files or errors

**Paths not working?**
- Ensure `pathPrefix` is set correctly
- Use `gatsby build --prefix-paths` for production

**Want to change repository name?**
- Update `pathPrefix` in `gatsby-config.js`
- Update site URL accordingly

---

## 🎉 You're Ready to Deploy!

Your portfolio includes:
- ✅ 6 comprehensive projects (including Chinese News Classification)
- ✅ Professional project detail pages
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Automated deployment setup

**Just push to GitHub and you're live!**
