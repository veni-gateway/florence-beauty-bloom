import { Helmet } from 'react-helmet-async';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
}

export const useSEO = (config: SEOConfig) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://florencebeautybloom.com';
  
  const fullUrl = config.canonicalUrl ? `${baseUrl}${config.canonicalUrl}` : baseUrl;
  const ogImage = config.ogImage || `${baseUrl}/og-image.jpg`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    canonicalUrl: fullUrl,
    ogImage,
    ogType: config.ogType || 'website',
    twitterHandle: config.twitterHandle || '@florencebeauty'
  };
};

// SEO Component for rendering meta tags
export const SEOHelmet = (config: SEOConfig) => {
  const seo = useSEO(config);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <link rel="canonical" href={seo.canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:image" content={seo.ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />
    </Helmet>
  );
};
