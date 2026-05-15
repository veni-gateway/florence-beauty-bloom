// Update this file with your actual business information
// Located at: src/lib/seo.ts

export const BUSINESS_INFO = {
  // Business details
  name: 'Florence Beauty Studio',
  domain: 'florencebeautybloom.com',
  phone: '+91-7600788388',
  email: 'florencebeautystudio08@gmail.com',
  founder: 'Shobhana Parmar',
  
  // Address information
  address: {
    street: 'Shivranjani Park, beside Atulyam Angan 1, near Morbi OverBridge, Vrindavan Society, Madhapar',
    city: 'Rajkot',
    state: 'Gujarat',
    zipCode: '360006',
    country: 'India',
  },
  
  // Coordinates for your location
  geo: {
    latitude: '22.3338621',
    longitude: '70.7718361',
  },
  
  // Social media links
  social: {
    instagram: 'https://www.instagram.com/__florence__beauty__?igsh=c3huMnRlbTJjbTUw',
    googleMaps: 'https://share.google/Vth38o2n6a2NQu6Os',
  },
  
  // Business hours
  hours: {
    monday: '8:00 AM - 10:00 PM',
    tuesday: '8:00 AM - 10:00 PM',
    wednesday: '8:00 AM - 10:00 PM',
    thursday: '8:00 AM - 10:00 PM',
    friday: '8:00 AM - 10:00 PM',
    saturday: '8:00 AM - 10:00 PM',
    sunday: '8:00 AM - 10:00 PM',
  },
  
  // SEO Keywords
  keywords: {
    primary: 'beauty studio, bridal makeup, hair salon, Rajkot',
    secondary: 'beauty services Rajkot, luxury salon, makeup artist, hair stylist',
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
