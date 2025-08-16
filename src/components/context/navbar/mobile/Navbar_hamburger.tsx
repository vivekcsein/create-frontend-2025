"use client";
import React from "react";
import { useHamburgerMenu } from "@/components/providers/HamburgerProvider";

import {
  HamburgerMenu,
  HamburgerLine,
} from "@/components/ui/styled-components/styled-navbar";

interface Navbar_hamburgerProps {
  menuKey: string;
}

const Navbar_hamburger = ({ menuKey }: Navbar_hamburgerProps) => {
  const { isOpen, toggleMenu } = useHamburgerMenu(menuKey);
  return (
    <HamburgerMenu onClick={toggleMenu} aria-label="Toggle menu">
      <HamburgerLine
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <HamburgerLine
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <HamburgerLine
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </HamburgerMenu>
  );
};

export default Navbar_hamburger;
