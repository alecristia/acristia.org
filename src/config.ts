/**
 * Site configuration for acristia.org
 *
 * Edit the values below to change your name, headline, contact links and navigation.
 */

export const siteConfig = {
  url: 'https://acristia.org',
  language: 'en',
  title: 'Alejandrina Cristia',
  description:
    'Senior AI/ML research scientist working at the intersection of speech AI, sensitive data and responsible deployment. Portfolio of case studies with evidence.',

  author: {
    name: 'Alejandrina Cristia',
    title: 'Senior AI/ML Research Scientist',
    /** Headline shown in the hero */
    headline: 'AI for real-world, sensitive data: from field hardware to open-source models to governance.',
    /** One-line pitch shown under the headline */
    pitch:
      'For over a decade I have taken AI work from niche idea to widely used tool, for users that most systems leave out: young children and under-served language communities. I now want to build AI and data products that are safe, fair and useful for millions.',
    bio: 'Senior AI/ML research scientist (CNRS & École Normale Supérieure, Paris). ISCA Fellow 2025, J-PAL Invited Researcher.',
    email: 'alecristia@gmail.com',
    location: 'Paris, France',
    /** Path to a photo in /public, or '' to show initials */
    photo: '/photo.jpg',
    /** Path to a public CV PDF in /public, or '' to hide the button */
    cv: '/cv-alejandrina-cristia.pdf',
  },

  /** Only non-empty links are displayed */
  social: {
    linkedin: 'https://www.linkedin.com/in/alejandrina-cristia/',
    scholar: 'https://scholar.google.com/citations?user=qYeeTuAAAAAJ&hl=en',
    github: '',
  },

  nav: [
    { label: 'Work', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export const socialLabels: Record<string, string> = {
  linkedin: 'LinkedIn',
  scholar: 'Google Scholar',
  github: 'GitHub',
};

export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = (typeof siteConfig.nav)[number];
