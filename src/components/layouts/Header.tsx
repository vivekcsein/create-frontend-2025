import React from "react";
import { HeaderData } from "@/types/app";
import Navbar_logo from "../context/navbar/Navbar_logo";
import Navbar_mobile from "../context/navbar/Navbar_mobile";
import { navigationLinks } from "@/libs/configs/config.data";
import Navbar_desktop from "../context/navbar/Navbar_desktop";
import Navbar_hamburger from "../context/navbar/Navbar_hamburger";
import { Header__main } from "../ui/styled-components/styled-navbar";
import { ScrollDirection } from "@/libs/hooks/use-scroll";

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
  const headerData: HeaderData = {
    header_logo: "🚀 SparkVerse",
    navbarlinks: navigationLinks,
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
              typeof headerData.header_logo === "string"
                ? headerData.header_logo
                : ""
            }
          />
        }

        {isResponsive ? (
          // hamburger icon
          // hamburger icon
          // hamburger icon
          <Navbar_hamburger />
        ) : (
          // Desktop only version
          // Desktop only version
          // Desktop only version
          <Navbar_desktop
            navbarlinks={headerData.navbarlinks}
            isAuthenticated={isAuthenticated || false}
          />
        )}
      </Header__main>
      {
        // mobile or tablet version sidebar
        // mobile or tablet version sidebar
        // mobile or tablet version sidebar
        isResponsive ? (
          <Navbar_mobile
            navbarlinks={headerData.navbarlinks}
            isAuthenticated={isAuthenticated || false}
          />
        ) : null
      }
    </>
  );
};

export default Header;
