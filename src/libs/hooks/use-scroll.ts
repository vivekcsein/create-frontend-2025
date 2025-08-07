// hooks/useScrollStatus.ts
import { useEffect, useState } from "react";
import { throttle } from "@/libs/utils/utils-scroll";

export type ScrollDirection = "up" | "down";

interface ScrollStatus {
  scrollY: number;
  scrollDirection: ScrollDirection;
  isScrolled: boolean;
}

export const useScrollStatus = (threshold = 30): ScrollStatus => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = throttle(() => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setIsScrolled(currentY > threshold);

      if (Math.abs(currentY - lastY) >= 5) {
        setScrollDirection(currentY > lastY ? "down" : "up");
        lastY = currentY;
      }
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrollY, scrollDirection, isScrolled };
};
