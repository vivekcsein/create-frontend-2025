"use client";

import React from "react";
import { extendedNavlink } from "@/types/app";

import Navbar_link from "./Navbar_link";
import { AnimatePresence } from "framer-motion";

import {
  Navbar__mobile_content,
  Navbar__mobile_overlay,
  Navbar__mobile_menulist,
} from "@/components/ui/styled-components/styled-navbar";
import { useHamburgerMenu } from "@/components/providers/HamburgerProvider";

interface Navbar_mobileProps {
  navbarlinks: Array<extendedNavlink>;
  isAuthenticated: boolean;
  isOpen?: boolean;
  closeMenu?: () => void;
}

// Animation variants
const contentVariants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      stiffness: 300,
      damping: 30,
    },
  },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const Navbar_mobile: React.FC<Navbar_mobileProps> = ({
  navbarlinks,
  isAuthenticated,
}) => {
  const { isOpen, closeMenu } = useHamburgerMenu();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Navbar__mobile_overlay
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={closeMenu}
          />

          <Navbar__mobile_content
            variants={contentVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <Navbar__mobile_menulist>
              {navbarlinks.map((link) => {
                return <Navbar_link key={link.id} link={link} />;
              })}
              {isAuthenticated && <div></div>}
            </Navbar__mobile_menulist>
          </Navbar__mobile_content>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navbar_mobile;
