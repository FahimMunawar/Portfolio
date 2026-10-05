/**
 * Sumi — site configuration
 *
 * This is the only file you need to edit to make the theme yours. Everything
 * else reads from here: metadata, navigation, feeds, OG images and the ink
 * simulation on the home page.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  /** Shown as the link text, so keep it short. */
  label: string;
  href: string;
}

export const SITE = {
  /** Absolute origin of the deployed site. No trailing slash. */
  url: "https://itsmunawar.com",
  title: "Munawar",
  /** Short Japanese mark used for the vertical rail. Empty string drops it. */
  titleMark: "墨",
  tagline: "Cloud & DevOps Engineer · AI/ML Researcher",
  description:
    "Md. Munawar Hossain — Cloud & DevOps Engineer and AI/ML researcher specializing in AWS, Azure, Kubernetes, and federated learning.",
  lang: "en",
  locale: "en_US",
  defaultOgImage: "/og-default.png",
} as const;

export const AUTHOR = {
  name: "Md. Munawar Hossain",
  url: "https://itsmunawar.com",
  bio: "Cloud & DevOps engineer who pairs AWS, Azure, Kubernetes and CI/CD automation with a research background in deep and federated learning.",
} as const;

export const NAV: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Stack", href: "/#stack" },
  { label: "Research", href: "/#research" },
  { label: "Contact", href: "/#contact" },
];

export const SOCIAL: SocialLink[] = [
  { label: "GitHub", href: "https://www.github.com/FahimMunawar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/munawark7/" },
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?user=kxAnHncAAAAJ&hl=en",
  },
  { label: "Email", href: "mailto:munawark7@gmail.com" },
];

export const CV_URL = "/Munawar_Hossain_CV.pdf";

/**
 * The WebGL ink simulation.
 *
 * It only ever loads on the home page, is skipped entirely when the visitor
 * prefers reduced motion or the browser lacks WebGL2, and pauses when scrolled
 * out of view. Turn both flags off for a completely JavaScript-free site.
 */
export const INK = {
  /** Full-bleed ink behind the hero. */
  hero: true,
  /** Narrow ink band used as a section transition. */
  divider: false,
  /** Density of each ink splat. Sensible range is 0.3 – 2.5. */
  strength: 1,
  /** Let the ink drift on its own instead of only reacting to the cursor. */
  autoFlow: true,
} as const;

/** Generate a per-article OG image at build time with satori. */
export const OG = {
  enabled: true,
  width: 1200,
  height: 630,
} as const;
