// hooks/use-hamburger-context.tsx
"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface HamburgerMenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

const HamburgerMenuContext = createContext<
  HamburgerMenuContextType | undefined
>(undefined);

export const HamburgerMenuProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <HamburgerMenuContext.Provider
      value={{ isOpen, toggleMenu, openMenu, closeMenu }}
    >
      {children}
    </HamburgerMenuContext.Provider>
  );
};

export const useHamburgerMenu = () => {
  const context = useContext(HamburgerMenuContext);
  if (!context)
    throw new Error(
      "useHamburgerMenu must be used within HamburgerMenuProvider"
    );
  return context;
};
