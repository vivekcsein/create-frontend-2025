import { ExtendedNavLink, FooterConfig } from "@/types/app";

export const navigationLinks: Array<ExtendedNavLink> = [
  { id: "home", label: "Home", href: "/", icon: "Home" },
  { id: "services", label: "Services", href: "/services", icon: "Package" },
  { id: "contact", label: "Contact", href: "/contact", icon: "Mail" },
  { id: "about", label: "About", href: "/about", icon: "Info" },
];

export const footerLinks: FooterConfig = {
  messages: {
    heading: "SparkVerse",
    subscribe: "Subscribe to get special offers and updates",
    description:
      "Transforming ideas and creativity into real-world solutions. We specialize in cutting-edge digital experiences that drive results and exceed expectations.",
    copyright: "Copyright © 2025 sparkverse.inc All Rights Reserved.",
  },
  // list of sections
  sections: ["quickLinks", "Services", "Stay Updated"],

  // list of links
  quickLinks: [
    {
      id: "quickLinks-web-dev",
      label: "Web Development",
      href: "/web-development",
      icon: "Code",
    },
    {
      id: "quickLinks-game-dev",
      label: "Game Development",
      href: "/game-development",
      icon: "Gamepad",
    },
    {
      id: "quickLinks-content-writing",
      label: "Content Writing",
      href: "/content-writing",
      icon: "FileText",
    },
  ],

  serviceLinks: [
    {
      id: "serviceLinks-Contact-Us",
      label: "Contact Us",
      href: "/contactus",
      icon: "Mail",
    },
    {
      id: "serviceLinks-Reviews",
      label: "Reviews",
      href: "/reviews",
      icon: "ArrowLeftRight",
    },
  ],

  socialLinks: [
    {
      id: "socialLinks-Facebook",
      label: "Facebook",
      href: "/",
      icon: "Facebook",
    },
    {
      id: "socialLinks-Instagram",
      label: "Instagram",
      href: "/",
      icon: "Instagram",
    },
    {
      id: "socialLinks-Twitter",
      label: "Twitter",
      href: "/",
      icon: "Twitter",
    },
  ],
  featureLinks: [
    {
      id: "features-privacy",
      label: "Privacy Policy",
      href: "/privacy",
      icon: "Lock",
    },
    {
      id: "features-terms",
      label: "Terms of Service",
      href: "/terms",
      icon: "Package",
    },
    {
      id: "features-cookie",
      label: "Cookie Policy",
      href: "/cookie",
      icon: "Cookie",
    },
  ],
};
