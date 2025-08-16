"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

// Main header container
export const Header__main = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Navbar__mobile_header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

// Fullscreen blur overlay for mobile menu
export const Navbar__mobile_overlay = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 998;
`;

// Sidebar drawer content
export const Navbar__mobile_content = styled(motion.div)`
  position: fixed;
  top: 60px;
  right: 0;
  width: 50%;
  height: calc(100vh - 60px);
  background: #ffffff;
  z-index: 999;
  padding: 40px 20px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

// Menu list structure
export const Navbar__mobile_menulist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const HamburgerMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export const HamburgerLine = styled(motion.div)`
  width: 25px;
  height: 3px;
  background: var(--muted);
  margin: 2px 0;
  border-radius: 2px;
`;
