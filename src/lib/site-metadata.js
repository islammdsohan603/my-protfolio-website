const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://my-nextjs-protfolio.vercel.app';

export const siteConfig = {
  url: SITE_URL,
  name: 'Sohan Islam',
  fullName: 'MD Sohan Islam',
  title: 'Full-Stack Developer',
  locale: 'en_US',
  email: 'islammdsohan603@gmail.com',
  phone: '+8801643223840',
  location: 'Bangladesh',
  city: 'Dhaka',
  ogImage: `${SITE_URL}/portfolio.png`,
  github: 'https://github.com/islammdsohan603',
  linkedin: 'https://www.linkedin.com/in/sohanislamwebdev/',
  keywords: [
    'Sohan Islam',
    'MD Sohan Islam',
    'Sohan Islam Portfolio',
    'Full-Stack Developer Bangladesh',
    'Frontend Developer Bangladesh',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Web Developer Portfolio',
    'Hire Web Developer Bangladesh',
    'JavaScript Developer',
    'Tailwind CSS',
    'MongoDB',
  ],
};

export function absoluteUrl(path = '') {
  const base = siteConfig.url.replace(/\/$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix === '/' ? '' : suffix}`;
}

/**
 * @param {{ title: string; description: string; path?: string; image?: string; keywords?: string[]; noIndex?: boolean }} options
 */
export function createPageMetadata({
  title,
  description,
  path = '',
  image = siteConfig.ogImage,
  keywords = [],
  noIndex = false,
}) {
  const canonical = absoluteUrl(path);
  const allKeywords = [...new Set([...siteConfig.keywords, ...keywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
    creator: siteConfig.fullName,
    publisher: siteConfig.fullName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: canonical,
      title,
      description,
      siteName: `${siteConfig.name} Portfolio`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

export const rootMetadata = createPageMetadata({
  title: 'MD Sohan Islam | Full-Stack Developer Portfolio | Bangladesh',
  description:
    'Portfolio of MD Sohan Islam (Sohan Islam), a Full-Stack Developer from Bangladesh specializing in React, Next.js, Node.js, and premium web experiences.',
  path: '/',
});

export const pageMetadata = {
  about: createPageMetadata({
    title: 'About',
    description:
      'Learn about MD Sohan Islam — education, journey, services, and what drives his work as a Full-Stack Developer in Bangladesh.',
    path: '/about',
    keywords: ['About Sohan Islam', 'Developer Background', 'Programming Hero'],
  }),
  skills: createPageMetadata({
    title: 'Skills',
    description:
      'Technical skills of Sohan Islam: React, Next.js, Node.js, MongoDB, Tailwind CSS, and modern full-stack tooling.',
    path: '/skills',
    keywords: ['React Skills', 'Next.js Skills', 'MongoDB', 'Tailwind CSS'],
  }),
  projects: createPageMetadata({
    title: 'Projects',
    description:
      'Explore web projects built by Sohan Islam — full-stack apps, React/Next.js products, and real-world portfolio work.',
    path: '/projects',
    keywords: ['Web Projects', 'Next.js Projects', 'React Portfolio Projects'],
  }),
  contact: createPageMetadata({
    title: 'Contact',
    description:
      'Contact MD Sohan Islam for junior developer roles, internships, freelance websites, and React/Next.js projects.',
    path: '/contact',
    keywords: ['Hire Developer Bangladesh', 'Contact Web Developer'],
  }),
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  image: siteConfig.ogImage,
  jobTitle: siteConfig.title,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  description: rootMetadata.description,
  sameAs: [siteConfig.github, siteConfig.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.city,
    addressCountry: siteConfig.location,
  },
  knowsAbout: ['React', 'Next.js', 'Node.js', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${siteConfig.name} Portfolio`,
  url: siteConfig.url,
  description: rootMetadata.description,
  author: { '@type': 'Person', name: siteConfig.fullName },
};
