"use client";

import { useState, useEffect } from "react";

export interface Breakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
  large: number;
}

export const breakpoints: Breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  large: 1200,
};

export type BreakpointKey = keyof Breakpoints;

export const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<BreakpointKey>("desktop");
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width < breakpoints.mobile) {
        setCurrentBreakpoint("mobile");
      } else if (width < breakpoints.tablet) {
        setCurrentBreakpoint("tablet");
      } else if (width < breakpoints.desktop) {
        setCurrentBreakpoint("desktop");
      } else {
        setCurrentBreakpoint("large");
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = currentBreakpoint === "mobile";
  const isTablet = currentBreakpoint === "tablet";
  const isDesktop =
    currentBreakpoint === "desktop" || currentBreakpoint === "large";
  const isLarge = currentBreakpoint === "large";

  return {
    currentBreakpoint,
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    breakpoints,
  };
};
