import React from "react";
import Link from "next/link";
import { NavLink } from "@/types/app";
// Props for rendering a single navigation link
export interface NavLinkProps {
  link: NavLink;
  isActive?: boolean;
  onClick?: (link: NavLink) => void;
  isMobile?: boolean;
  fontSize?: string;
}

const Navbar_link: React.FC<NavLinkProps & { style?: React.CSSProperties }> = ({
  link,
  isActive,
  fontSize = "1rem",
}) => {
  return (
    <Link
      key={link.id}
      href={link.href}
      style={{ fontSize: fontSize }}
      className={`group/link relative w-fit font-medium transition-colors duration-200 ${
        isActive ? "text-secondary" : "text-muted"
      }`}
    >
      {link.label}
      <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-muted transition-all duration-300 group-hover/link:w-full group-hover/link:left-0"></span>
    </Link>
  );
};

export default Navbar_link;
