# Quick Update Checklist

Use this checklist to quickly replace all Chanhdai content with your own portfolio information.

## ✅ Essential Files to Update (Priority 1)

### 1. `src/data/user.ts`
- [ ] Update `firstName`, `lastName`, `displayName`
- [ ] Change `username` to your GitHub username
- [ ] Update `bio` with your tagline
- [ ] Modify `flipSentences` with your roles
- [ ] Update `address`, `phoneNumber`, `email`
- [ ] Change `website` and `otherWebsites`
- [ ] Update `jobTitle` and `jobs` array
- [ ] Rewrite `about` section with your story
- [ ] Replace `avatar`, `avatarWebp`, `ogImage` URLs
- [ ] Update `keywords` for SEO
- [ ] Change `dateCreated` to today's date

### 2. `src/config/site.ts`
- [ ] Update `SITE_INFO.url` to your domain
- [ ] Change `SOURCE_CODE_GITHUB_URL` to your repo
- [ ] Update `UTM_PARAMS.utm_source` to your domain

### 3. `package.json`
- [ ] Change `name` to your portfolio name
- [ ] Update `description`
- [ ] Modify `homepage` URL
- [ ] Update `author` information
- [ ] Change `repository.url` to your repo

## ✅ Content Sections (Priority 2)

### 4. `src/features/profile/data/experiences.ts`
- [ ] Replace all work experience entries
- [ ] Update company names and logos
- [ ] Modify job titles and descriptions
- [ ] Update employment periods
- [ ] Change skills lists

### 5. `src/features/profile/data/projects.ts`
- [ ] Replace all project entries
- [ ] Update project titles and descriptions
- [ ] Change project URLs and logos
- [ ] Modify skills and technologies
- [ ] Update project periods

### 6. `src/features/profile/data/social-links.ts`
- [ ] Update GitHub, LinkedIn, Twitter links
- [ ] Add/remove social platforms as needed
- [ ] Change usernames and URLs

### 7. `src/features/profile/data/tech-stack.ts`
- [ ] Update skills categories
- [ ] Modify skill names and levels
- [ ] Add/remove technologies you know

### 8. `src/features/profile/data/awards.ts`
- [ ] Replace with your awards/achievements
- [ ] Update award titles and descriptions
- [ ] Change issuing organizations

### 9. `src/features/profile/data/certifications.ts`
- [ ] Replace with your certifications
- [ ] Update certification details
- [ ] Add credential IDs and expiry dates

## ✅ API and External Services (Priority 3)

### 10. `src/app/api/stargazers_count/route.ts`
- [ ] Update GitHub repository URL
- [ ] Change to your repository
- [ ] Update environment variable name if needed

### 11. Environment Variables
- [ ] Create `.env.local` file
- [ ] Add `APP_URL=https://your-website.com`
- [ ] Add `GITHUB_API_TOKEN=your-token`

## ✅ Images and Assets (Priority 4)

### 12. Required Images
- [ ] Profile avatar (JPEG/PNG + WebP)
- [ ] Company logos (WebP format)
- [ ] Project logos (SVG recommended)
- [ ] OG image for social media (1200x630px)
- [ ] Favicon and app icons

### 13. Image Optimization
- [ ] Use WebP format for photos
- [ ] Use SVG for logos and icons
- [ ] Optimize image sizes
- [ ] Add proper alt text

## ✅ SEO and Metadata (Priority 5)

### 14. `src/app/layout.tsx`
- [ ] Verify metadata is using your user data
- [ ] Check Open Graph tags
- [ ] Update Twitter Card metadata
- [ ] Verify favicon links

### 15. `src/app/robots.ts`
- [ ] Update sitemap URL if needed
- [ ] Modify robots.txt content

### 16. `src/app/sitemap.ts`
- [ ] Verify sitemap generation
- [ ] Check URL structure

## ✅ Testing and Validation

### 17. Local Testing
- [ ] Run `pnpm dev` and check homepage
- [ ] Verify all links work
- [ ] Test responsive design
- [ ] Check image loading
- [ ] Validate TypeScript compilation

### 18. Content Review
- [ ] Proofread all text content
- [ ] Verify contact information
- [ ] Check social media links
- [ ] Review SEO keywords
- [ ] Test contact forms

### 19. Performance Check
- [ ] Run `pnpm build`
- [ ] Check for build errors
- [ ] Verify image optimization
- [ ] Test loading speed

## ✅ Deployment Preparation

### 20. Domain Setup
- [ ] Configure domain DNS
- [ ] Set up SSL certificate
- [ ] Update all URLs to use your domain
- [ ] Configure redirects if needed

### 21. Analytics and Tracking
- [ ] Add Google Analytics
- [ ] Set up conversion tracking
- [ ] Configure UTM parameters
- [ ] Test tracking implementation

## 🚀 Quick Start Commands

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm dev

# 3. Check for TypeScript errors
pnpm check-types

# 4. Build for production
pnpm build

# 5. Format code
pnpm format:write

# 6. Lint code
pnpm lint
```

## 📝 Notes

- **Base64 Encoding**: Use https://t.io.vn/base64-string-converter for phone/email
- **Image Hosting**: Use your own domain or services like Cloudinary, Vercel, etc.
- **GitHub Token**: Create a personal access token for the stargazers API
- **Domain**: Update all references to use your domain instead of chanhdai.com

## 🔄 After Updates

1. **Test locally** with `pnpm dev`
2. **Build and deploy** to your hosting platform
3. **Verify** all content and functionality
4. **Monitor** analytics and performance
5. **Update** content regularly to keep it fresh

This checklist ensures you don't miss any important updates when customizing the portfolio for your own use. 