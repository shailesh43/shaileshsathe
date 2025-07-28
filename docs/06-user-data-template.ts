// Template for updating src/data/user.ts with your own information
// Copy this structure and replace the values with your own

export const USER = {
  // Basic Information
  firstName: "Your First Name",
  lastName: "Your Last Name",
  displayName: "Your Full Name", // This will be used as the main title
  username: "your-github-username", // Your GitHub username
  gender: "male" as const, // "male" | "female" | "other"
  
  // Bio and Professional Info
  bio: "Your professional tagline or short bio",
  flipSentences: [
    "Software Developer",
    "Full Stack Engineer", 
    "UI/UX Designer",
    "Open Source Contributor",
    // Add more roles that describe you
  ],
  
  // Contact Information
  address: "Your City, State, Country",
  phoneNumber: "base64-encoded-phone", // Use https://t.io.vn/base64-string-converter
  email: "base64-encoded-email", // Use https://t.io.vn/base64-string-converter
  website: "https://your-website.com",
  otherWebsites: [
    "https://your-blog.com",
    "https://your-portfolio.com",
    // Add other websites you own
  ],
  
  // Personal Information
  dateOfBirth: "1990-01-01", // YYYY-MM-DD format
  jobTitle: "Your Current Job Title",
  
  // Current Jobs (can have multiple)
  jobs: [
    {
      title: "Senior Software Engineer",
      company: "Your Company Name",
      website: "https://company-website.com",
    },
    // Add more jobs if you have multiple positions
  ],
  
  // About Section - This is the main description on your portfolio
  about: `
Hello, World! I am [Your Name] — a passionate software developer with [X] years of experience in building modern web applications.

I specialize in [your main technologies/skills] and love creating user-centric solutions that solve real-world problems. My journey in tech started [when/how you got into tech] and I've been constantly learning and growing ever since.

Some of my key achievements include:
- [Achievement 1]
- [Achievement 2] 
- [Achievement 3]

When I'm not coding, you can find me [your hobbies/interests]. I'm always open to new opportunities and collaborations.

Let's connect and build something amazing together!
  `,
  
  // Images - Replace with your own image URLs
  avatar: "https://your-domain.com/images/your-avatar.jpg",
  avatarWebp: "https://your-domain.com/images/your-avatar.webp", // WebP version for better performance
  ogImage: "https://your-domain.com/images/og-image.png", // Social media preview image (1200x630px)
  
  // SEO Keywords - Important for search engine optimization
  keywords: "your name, software developer, web developer, react, typescript, your skills, your location",
  
  // Portfolio Creation Date
  dateCreated: "2024-01-01", // YYYY-MM-DD - when you created this portfolio
};

// Example of how to encode sensitive information:
// 
// For phone number (E.164 format):
// Original: +1234567890
// Encoded: KzEyMzQ1Njc4OTA=
// 
// For email:
// Original: your-email@domain.com  
// Encoded: eW91ci1lbWFpbEBkb21haW4uY29t
//
// Use this tool: https://t.io.vn/base64-string-converter 