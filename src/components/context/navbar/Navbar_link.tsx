"use client";

import React from "react";
import Link from "next/link";
import { NavlinkProps } from "@/types/app";

const Navbar_link: React.FC<NavlinkProps & { style?: React.CSSProperties }> = ({
  link,
  isActive,
}) => {
  return (
    <Link
      key={link.id}
      href={link.href}
      className={`group relative w-fit font-medium text-[1rem] transition-colors duration-200 ${
        isActive ? "text-secondary" : "text-primary"
      }`}
    >
      {link.label}
      <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </Link>
  );
};

export default Navbar_link;
