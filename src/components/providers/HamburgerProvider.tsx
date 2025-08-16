"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface HamburgerMenuState {
  [key: string]: boolean;
}

interface HamburgerMenuContextType {
  getIsOpen: (key: string) => boolean;
  toggleMenu: (key: string) => void;
  openMenu: (key: string) => void;
  closeMenu: (key: string) => void;
}

const HamburgerMenuContext = createContext<
  HamburgerMenuContextType | undefined
>(undefined);

export const HamburgerMenuProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [menuStates, setMenuStates] = useState<HamburgerMenuState>({});

  const getIsOpen = useCallback(
    (key: string) => {
      return menuStates[key] ?? false;
    },
    [menuStates]
  );

  const toggleMenu = useCallback((key: string) => {
    setMenuStates((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const openMenu = useCallback((key: string) => {
    setMenuStates((prev) => ({ ...prev, [key]: true }));
  }, []);

  const closeMenu = useCallback((key: string) => {
    setMenuStates((prev) => ({ ...prev, [key]: false }));
  }, []);

  return (
    <HamburgerMenuContext.Provider
      value={{ getIsOpen, toggleMenu, openMenu, closeMenu }}
    >
      {children}
    </HamburgerMenuContext.Provider>
  );
};

export const useHamburgerMenu = (key: string) => {
  const context = useContext(HamburgerMenuContext);
  if (!context)
    throw new Error(
      "useHamburgerMenu must be used within HamburgerMenuProvider"
    );

  const { getIsOpen, toggleMenu, openMenu, closeMenu } = context;

  return {
    isOpen: getIsOpen(key),
    toggleMenu: () => toggleMenu(key),
    openMenu: () => openMenu(key),
    closeMenu: () => closeMenu(key),
  };
};
