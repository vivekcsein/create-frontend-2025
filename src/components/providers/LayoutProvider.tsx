"use client";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import React, { useRef } from "react";
import { useScrollStatus } from "@/libs/hooks/use-scroll";
import { HamburgerMenuProvider } from "./HamburgerProvider";
import { useBreakpoint } from "@/libs/hooks/use-breakpoints";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const headerRef = useRef<HTMLHeadElement | null>(null);
  const { isScrolled, scrollDirection } = useScrollStatus();

  return (
    <>
      <main style={{ minHeight: "100vh", paddingTop: "60px" }}>
        <HamburgerMenuProvider>
          <Header
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
            refObject={headerRef}
            scrollDir={scrollDirection}
            isScrolled={isScrolled}
            isAuthenticated={true}
          />
        </HamburgerMenuProvider>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutProvider;
