// SEO configurations for each page
export const pageMetadata = {
  home: {
    title: 'Florence Beauty Studio — Hair, Skin, Makeup & Bridal in Mumbai',
    description: 'Florence is a soft luxury beauty studio offering hair, skin, makeup & bridal services in Bandra, Mumbai. Where beauty feels like you.',
    keywords: 'beauty studio Mumbai, bridal makeup, hair stylist, skin therapy, beauty services Bandra',
    canonicalUrl: '/',
    ogType: 'website'
  },
  about: {
    title: 'About Florence — Our Story & Team | Beauty Studio',
    description: 'Learn about Florence Beauty Studio\'s journey from a one-chair studio to a luxury beauty destination. Meet our team of expert stylists and therapists.',
    keywords: 'about Florence beauty, beauty studio story, hair stylists, makeup artists, skin therapists',
    canonicalUrl: '/about',
    ogType: 'website'
  },
  contact: {
    title: 'Contact Florence Beauty Studio | Bookings & Inquiries',
    description: 'Get in touch with Florence Beauty Studio in Bandra, Mumbai. Book your appointment or inquire about our services.',
    keywords: 'contact Florence beauty, book appointment, beauty studio Mumbai',
    canonicalUrl: '/contact',
    ogType: 'website'
  }
};

// Organization schema for JSON-LD
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Florence Beauty Studio',
  description: 'Soft luxury beauty studio offering hair, skin, makeup & bridal services',
  url: 'https://florencebeautybloom.com',
  telephone: '+91-XXXXXXXXXX', // Update with actual phone
  email: 'hello@florencebeauty.com', // Update with actual email
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bandra, Mumbai', // Update with full address
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400050',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '19.0596', // Update with actual coordinates
    longitude: '72.8295'
  },
  image: 'https://florencebeautybloom.com/og-image.jpg',
  sameAs: [
    'https://www.instagram.com/florencebeauty', // Update with actual Instagram
    'https://www.facebook.com/florencebeauty' // Update with actual Facebook
  ]
};

// Service schema for JSON-LD
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://florencebeautybloom.com',
  name: 'Florence Beauty Studio',
  offers: [
    {
      '@type': 'Service',
      name: 'Hair Services',
      description: 'Professional hair styling, coloring, and treatment services',
      provider: {
        '@type': 'Organization',
        name: 'Florence Beauty Studio'
      }
    },
    {
      '@type': 'Service',
      name: 'Skin Services',
      description: 'Advanced skincare treatments and therapy',
      provider: {
        '@type': 'Organization',
        name: 'Florence Beauty Studio'
      }
    },
    {
      '@type': 'Service',
      name: 'Makeup Services',
      description: 'Professional makeup application for all occasions',
      provider: {
        '@type': 'Organization',
        name: 'Florence Beauty Studio'
      }
    },
    {
      '@type': 'Service',
      name: 'Bridal Makeup',
      description: 'Specialized bridal makeup and styling services',
      provider: {
        '@type': 'Organization',
        name: 'Florence Beauty Studio'
      }
    }
  ]
};
