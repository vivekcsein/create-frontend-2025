import { extendedNavlink } from "@/types/app";

export const navigationLinks: Array<extendedNavlink> = [
  { id: "home", label: "Home", href: "/", icon: "Home" }, // Lucide: Home
  { id: "services", label: "Services", href: "/services", icon: "Package" }, // Lucide: Package or Briefcase
  { id: "contact", label: "Contact", href: "/contact", icon: "Mail" }, // Lucide: Mail or Phone
  { id: "about", label: "About", href: "/about", icon: "Info" }, // Lucide: Info or User
];
