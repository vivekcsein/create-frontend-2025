"use client";
import React from "react";
import { useHamburgerMenu } from "@/components/providers/HamburgerProvider";
import { AnimatePresence } from "framer-motion";

import {
  Navbar__mobile_content,
  Navbar__mobile_overlay,
} from "@/components/ui/styled-components/styled-navbar";

interface SidebarProps {
  menuKey: string;
  dir?: "left" | "right";
  children: React.ReactNode;
}

const Sidebar = ({ menuKey, dir = "right", children }: SidebarProps) => {
  const { isOpen, closeMenu } = useHamburgerMenu(menuKey);

  const contentVariants = {
    closed: {
      x: dir === "left" ? "-100%" : "100%",
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
            style={{ [dir]: 0 }} // Positioning based on direction
          >
            {children}
          </Navbar__mobile_content>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
