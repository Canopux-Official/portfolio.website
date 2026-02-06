import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
}

const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
}: SEOProps) => {
  const siteUrl = window.location.origin;
  const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : window.location.href;
  const fullOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`) : undefined;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={fullCanonical} />

      {/* Open Graph tags (Facebook, LinkedIn) */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={fullCanonical} />
      <meta property='og:type' content={ogType} />
      {fullOgImage && <meta property='og:image' content={fullOgImage} />}

      {/* Twitter Card tags */}
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {fullOgImage && <meta name='twitter:image' content={fullOgImage} />}
    </Helmet>
  );
};

export default SEO;
