/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;
  
  /** Page description (used in meta tags and SEO) */
  description: string;
  
  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;
  
  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  home: {
    title: 'Home',
    description: 'Senior AI/ML research scientist: speech AI, sensitive data and responsible deployment.',
  },
  projects: {
    title: 'Work: case studies and projects',
    description: 'Case studies and projects across speech AI, data governance, hardware, methods and leadership, with links to the evidence.',
    heading: 'Work',
    intro: 'Full case studies cover the problem, my approach, results, trade-offs and what I learned. Shorter entries link straight to the evidence. Use the filters to browse by area.',
  },
  about: {
    title: 'About',
    description: 'Background, current focus and how to reach Alejandrina Cristia.',
  },
  contact: {
    title: 'Contact',
    description: 'Get in touch about roles in AI/ML, responsible AI and data products.',
    heading: "Let's talk",
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
