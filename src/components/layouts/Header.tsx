import React from "react";
import { HeaderConfig } from "@/types/app";
import Sidebar from "../ui/custom/Sidebar";
import Navbar_logo from "../context/navbar/Navbar_logo";
import { navigationLinks } from "@/libs/data/data.layout";
import { ScrollDirection } from "@/libs/hooks/use-scroll";
import Navbar_mobile from "../context/navbar/mobile/Navbar_mobile";
import { Header__main } from "../ui/styled-components/styled-navbar";
import Navbar_desktop from "../context/navbar/desktop/Navbar_desktop";
import Navbar_hamburger from "../context/navbar/mobile/Navbar_hamburger";

interface HeaderProps {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
  scrollDir?: ScrollDirection;
  isScrolled?: boolean;
  isAuthenticated?: boolean;
  refObject: React.RefObject<HTMLHeadElement | null>;
}

const Header = ({
  isMobile,
  isTablet,
  refObject,
  isScrolled,
  scrollDir,
  isAuthenticated,
}: HeaderProps) => {
  const HeaderConfig: HeaderConfig = {
    logo: "🚀 SparkVerse",
    navLinks: navigationLinks,
  };

  const isResponsive = isMobile || isTablet;

  return (
    <>
      <Header__main
        className="Header_main"
        ref={refObject}
        initial={{ opacity: 0, y: -30, scaleY: 0.9 }}
        animate={
          isScrolled && !isResponsive
            ? scrollDir === "down"
              ? { opacity: 1, y: -5, scaleY: 0.95 }
              : { opacity: 1, y: 0, scaleY: 1 }
            : { opacity: 1, y: 0, scaleY: 1 }
        }
        transition={{ duration: 0.2, ease: "easeOut" }}
        exit={{ opacity: 0, y: 0, scaleY: 1 }}
      >
        {
          //logo
          //logo
          //logo
          <Navbar_logo
            image=""
            label={
              typeof HeaderConfig.logo === "string" ? HeaderConfig.logo : ""
            }
          />
        }

        {isResponsive ? (
          // hamburger icon
          // hamburger icon
          // hamburger icon
          <Navbar_hamburger menuKey="hamburger-menu" />
        ) : (
          // Desktop only version
          // Desktop only version
          // Desktop only version
          <Navbar_desktop
            navbarlinks={HeaderConfig.navLinks}
            isAuthenticated={isAuthenticated || false}
          />
        )}
      </Header__main>
      {
        // mobile or tablet version sidebar
        // mobile or tablet version sidebar
        // mobile or tablet version sidebar
        isResponsive ? (
          <Sidebar menuKey="hamburger-menu">
            <Navbar_mobile
              navbarlinks={HeaderConfig.navLinks}
              isAuthenticated={isAuthenticated || false}
            />
          </Sidebar>
        ) : null
      }
    </>
  );
};

export default Header;
