import { Helmet, HelmetProvider } from 'react-helmet-async';

const BASE_URL = 'https://www.rnfutureforge.com';
const SITE_NAME = 'RN FUTUREFORGE Engineering Pvt. Ltd.';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-image.jpg`;

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  /** Arbitrary JSON-LD objects (arrays supported for @graph) */
  structuredData?: object | object[];
  /** Breadcrumbs for inner pages */
  breadcrumbs?: BreadcrumbItem[];
  /** noindex pages (e.g., 404) */
  noIndex?: boolean;
  /** Article-specific */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

function buildBreadcrumbSchema(crumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        item: `${BASE_URL}${c.url}`,
      })),
    ],
  };
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  keywords,
  structuredData,
  breadcrumbs,
  noIndex = false,
  article,
}: SEOHeadProps) {
  const fullTitle =
    title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const ogImg = ogImage || DEFAULT_OG_IMAGE;

  // Collect all JSON-LD blocks
  const schemas: object[] = [];
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(buildBreadcrumbSchema(breadcrumbs));
  }
  if (structuredData) {
    if (Array.isArray(structuredData)) schemas.push(...structuredData);
    else schemas.push(structuredData);
  }

  return (
    <Helmet>
      {/* ── Primary ─────────────────────────────────────────── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noIndex
            ? 'noindex, nofollow'
            : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        }
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph ──────────────────────────────────────── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} — RN FUTUREFORGE Engineering`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Article-specific OG ─────────────────────────────── */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* ── Twitter Card ────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rnfutureforge" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />
      <meta name="twitter:image:alt" content={`${title} — RN FUTUREFORGE Engineering`} />

      {/* ── Structured Data ─────────────────────────────────── */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export { HelmetProvider };
