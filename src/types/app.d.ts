// Image metadata for logos, icons, etc.
export type ImageProps = {
  id: string;
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

// Basic navigation link
export interface NavLink {
  id: string;
  label: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
}

// Extended navigation link with nested structure
export interface ExtendedNavLink extends NavLink {
  description?: string;
  subLinks?: NavLink[];
}

// Header configuration
export interface HeaderConfig {
  logo: ImageProps | string;
  navLinks: ExtendedNavLink[];
}

// Footer configuration
export interface FooterConfig {
  messages: {
    heading: string;
    subscribe: string;
    description: string;
    copyright: string;
    contact?: string;
  };

  logo?: ImageProps | string;
  sections?: string[];

  quickLinks?: NavLink[];
  serviceLinks?: NavLink[];
  socialLinks?: NavLink[];
  featureLinks?: NavLink[];
}

// Root layout data structure
export interface RootLayoutData {
  header: HeaderConfig;
  footer: FooterConfig;
}

// Final layout wrapper
export interface RootLayoutResponse {
  layout: RootLayoutData;
}
