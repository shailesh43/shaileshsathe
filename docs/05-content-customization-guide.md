# Content Customization Guide

This guide will help you replace all the Chanhdai content with your own portfolio information. The project is structured to make content updates straightforward and maintainable.

## Quick Start - Essential Files to Update

### 1. User Profile Data (`src/data/user.ts`)

This is the main file containing your personal information:

```tsx
export const USER = {
  firstName: "Your First Name",
  lastName: "Your Last Name", 
  displayName: "Your Full Name",
  username: "your-username",
  gender: "male" | "female" | "other",
  bio: "Your short bio/tagline",
  flipSentences: [
    "Software Developer",
    "UI/UX Designer", 
    "Open Source Contributor",
    // Add your own roles
  ],
  address: "Your City, State, Country",
  phoneNumber: "base64-encoded-phone", // Use https://t.io.vn/base64-string-converter
  email: "base64-encoded-email", // Use https://t.io.vn/base64-string-converter
  website: "https://your-website.com",
  otherWebsites: [
    "https://your-other-site.com",
    // Add other websites
  ],
  dateOfBirth: "YYYY-MM-DD",
  jobTitle: "Your Job Title",
  jobs: [
    {
      title: "Your Job Title",
      company: "Company Name",
      website: "https://company-website.com",
    },
  ],
  about: `
Your detailed about section. This can be multiple paragraphs.

Highlight your experience, skills, and what makes you unique.

Include links to your projects and achievements.
  `,
  avatar: "https://your-domain.com/images/your-avatar.jpg",
  avatarWebp: "https://your-domain.com/images/your-avatar.webp", 
  ogImage: "https://your-domain.com/images/og-image.png",
  keywords: "your, keywords, for, seo, separated, by, commas",
  dateCreated: "YYYY-MM-DD", // When you created this portfolio
};
```

### 2. Site Configuration (`src/config/site.ts`)

Update the site-wide settings:

```tsx
export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://your-website.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const SOURCE_CODE_GITHUB_URL = "https://github.com/your-username/your-repo";

export const UTM_PARAMS = {
  utm_source: "your-website.com",
  utm_medium: "portfolio_website", 
  utm_campaign: "referral",
};
```

## Detailed Content Sections

### 3. Work Experience (`src/features/profile/data/experiences.ts`)

Replace with your work history:

```tsx
export const EXPERIENCES: Experience[] = [
  {
    id: "company-id",
    companyName: "Company Name",
    companyLogo: "https://your-domain.com/images/companies/company-logo.webp",
    positions: [
      {
        id: "unique-position-id",
        title: "Your Job Title",
        employmentPeriod: {
          start: "MM.YYYY",
          end: "MM.YYYY", // Optional, omit if current
        },
        employmentType: "Full-time" | "Part-time" | "Contract" | "Freelance",
        icon: "code" | "design" | "management" | "research",
        description: `
- Key responsibility or achievement
- Another important contribution
- Technical skills demonstrated
- Impact on the company/project
        `,
        skills: [
          "React",
          "TypeScript", 
          "Node.js",
          // Add relevant skills
        ],
        isExpanded: true, // Set to true for current/important positions
      },
    ],
    isCurrentEmployer: true, // Set to true for current job
  },
];
```

### 4. Projects (`src/features/profile/data/projects.ts`)

Showcase your projects:

```tsx
export const PROJECTS: Project[] = [
  {
    id: "project-id",
    title: "Project Name",
    period: {
      start: "MM.YYYY",
      end: "MM.YYYY", // Optional
    },
    link: "https://project-url.com",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      // Technologies used
    ],
    description: `
Brief project description.

- Key feature or achievement
- Technical challenge solved
- Impact or results
- Technologies and methodologies used
    `,
    logo: "https://your-domain.com/images/project-logos/project-logo.svg",
    isExpanded: true, // Set to true for featured projects
  },
];
```

### 5. Social Links (`src/features/profile/data/social-links.ts`)

Update your social media and contact information:

```tsx
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/your-username",
    icon: "github",
    username: "your-username",
  },
  {
    id: "linkedin", 
    title: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    icon: "linkedin",
    username: "your-profile",
  },
  {
    id: "twitter",
    title: "Twitter", 
    url: "https://twitter.com/your-handle",
    icon: "twitter",
    username: "@your-handle",
  },
  // Add more social links
];
```

### 6. Tech Stack (`src/features/profile/data/tech-stack.ts`)

List your technical skills:

```tsx
export const TECH_STACK: TechStack[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      {
        id: "react",
        name: "React",
        icon: "react",
        level: "Advanced", // "Beginner" | "Intermediate" | "Advanced" | "Expert"
      },
      {
        id: "typescript",
        name: "TypeScript", 
        icon: "typescript",
        level: "Advanced",
      },
      // Add more skills
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        icon: "nodejs", 
        level: "Advanced",
      },
      // Add more skills
    ],
  },
];
```

### 7. Awards & Certifications

#### Awards (`src/features/profile/data/awards.ts`)

```tsx
export const AWARDS: Award[] = [
  {
    id: "award-id",
    title: "Award Name",
    issuer: "Issuing Organization",
    date: "YYYY-MM-DD",
    description: "Description of the award and why you received it",
    link: "https://award-link.com", // Optional
    icon: "trophy", // Icon name
  },
];
```

#### Certifications (`src/features/profile/data/certifications.ts`)

```tsx
export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-id",
    title: "Certification Name",
    issuer: "Certifying Organization",
    date: "YYYY-MM-DD",
    expiryDate: "YYYY-MM-DD", // Optional
    credentialId: "CERT-123456", // Optional
    link: "https://certification-link.com", // Optional
    icon: "certificate", // Icon name
  },
];
```

## SEO and Metadata Updates

### 8. Package.json (`package.json`)

Update the project metadata:

```json
{
  "name": "your-portfolio",
  "version": "0.1.0",
  "description": "Your portfolio website description",
  "homepage": "https://your-website.com",
  "author": {
    "name": "Your Name",
    "email": "your-email@domain.com",
    "url": "https://your-website.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-username/your-repo.git"
  }
}
```

### 9. Root Layout Metadata (`src/app/layout.tsx`)

The metadata is automatically generated from your user data, but you can customize:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s | ${SITE_INFO.name}`,
    default: `${USER.displayName} - ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  // ... rest of metadata
};
```

## Image Assets

### 10. Required Images

You'll need to replace these images with your own:

1. **Avatar Images**:
   - `avatar` - Your profile picture (JPEG/PNG)
   - `avatarWebp` - WebP version for better performance

2. **Company Logos**:
   - Store in `public/images/companies/` or use external URLs
   - Use WebP format for better performance

3. **Project Logos**:
   - Store in `public/images/project-logos/` or use external URLs
   - SVG format recommended for logos

4. **OG Image**:
   - Social media preview image (1200x630px recommended)
   - Should represent your brand/portfolio

### 11. Image Optimization

For better performance:

```tsx
// Use Next.js Image component
import Image from "next/image";

<Image
  src="https://your-domain.com/images/your-image.webp"
  alt="Description"
  width={400}
  height={300}
  priority={true} // For above-the-fold images
/>
```

## Content Management Tips

### 12. Data Organization

- Keep data separate from components
- Use TypeScript interfaces for type safety
- Maintain consistent data structure
- Use meaningful IDs for easy reference

### 13. Content Updates

- Update data files, not components
- Use descriptive variable names
- Include relevant links and references
- Keep content concise but informative

### 14. SEO Best Practices

- Use descriptive titles and descriptions
- Include relevant keywords naturally
- Provide structured data (JSON-LD)
- Optimize images with alt text
- Use semantic HTML structure

## Deployment Considerations

### 15. Environment Variables

Create a `.env.local` file:

```env
APP_URL=https://your-website.com
GITHUB_API_TOKEN=your-github-token
```

### 16. Domain Configuration

- Update domain in site configuration
- Configure DNS settings
- Set up SSL certificate
- Update social media links

### 17. Analytics and Tracking

- Add Google Analytics
- Configure UTM parameters
- Set up conversion tracking
- Monitor performance metrics

## Testing Your Changes

### 18. Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Check for TypeScript errors
pnpm check-types
```

### 19. Content Validation

- Verify all links work correctly
- Check image loading
- Test responsive design
- Validate SEO metadata
- Review accessibility

This guide provides a comprehensive approach to customizing your portfolio while maintaining the clean, professional structure of the original design. 