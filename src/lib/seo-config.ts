// Update this file with your actual business information
// Located at: src/lib/seo.ts

export const BUSINESS_INFO = {
  // Your business details
  name: 'Florence Beauty Studio',
  domain: 'florencebeautybloom.com',
  phone: '+91-XXXXXXXXXX', // TODO: Update with actual phone
  email: 'hello@florencebeauty.com', // TODO: Update with actual email
  
  // Address information
  address: {
    street: 'Bandra, Mumbai', // TODO: Update with full address
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400050',
    country: 'India',
  },
  
  // Coordinates for your location
  geo: {
    latitude: '19.0596', // TODO: Update with actual coordinates
    longitude: '72.8295',
  },
  
  // Social media links
  social: {
    instagram: 'https://instagram.com/florencebeauty', // TODO: Update
    facebook: 'https://facebook.com/florencebeauty', // TODO: Update
    twitter: '@florencebeauty',
  },
  
  // Business hours (optional)
  hours: {
    monday: '10:00 AM - 6:00 PM',
    tuesday: '10:00 AM - 6:00 PM',
    wednesday: '10:00 AM - 6:00 PM',
    thursday: '10:00 AM - 6:00 PM',
    friday: '10:00 AM - 6:00 PM',
    saturday: '10:00 AM - 6:00 PM',
    sunday: 'Closed',
  },
  
  // SEO Keywords
  keywords: {
    primary: 'beauty studio, bridal makeup, hair salon',
    secondary: 'beauty services Mumbai, luxury salon, makeup artist',
  },
};

// Quick SEO Checklist
export const SEO_CHECKLIST = {
  immediate: [
    '☐ Update BUSINESS_INFO with actual details above',
    '☐ Replace placeholder domain with your actual domain',
    '☐ Create OG image (1200x630px) at /public/og-image.jpg',
    '☐ Update sitemap.xml with current date',
    '☐ Verify robots.txt is accessible at /robots.txt',
  ],
  
  shortTerm: [
    '☐ Submit sitemap to Google Search Console',
    '☐ Set up Google Analytics 4',
    '☐ Install Google Search Console',
    '☐ Add structured data to Yoast/Schema plugin',
    '☐ Optimize all images with alt text',
  ],
  
  mediumTerm: [
    '☐ Create content blog for better SEO',
    '☐ Build backlinks from beauty industry sites',
    '☐ Optimize Core Web Vitals score',
    '☐ Add FAQ schema for common questions',
    '☐ Implement breadcrumb schema',
  ],
  
  longTerm: [
    '☐ Monitor keyword rankings monthly',
    '☐ Publish consistent content (2-4x monthly)',
    '☐ Build relationships with beauty influencers',
    '☐ Improve Domain Authority through backlinks',
    '☐ Optimize for voice search',
  ],
};
