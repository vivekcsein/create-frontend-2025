export interface navlink {
  id: string;
  label: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
}

export interface extendedNavlink extends navlink {
  discription?: string;
  sublinks?: Array<navlink>;
}

export interface HeaderData {
  header_logo: imageProps | string;
  navbarlinks: Array<extendedNavlink>;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: navlink[];
  onItemClick?: (link: navlink) => void;
}

export interface NavlinkProps {
  link: navlink;
  isActive?: boolean;
  onClick?: (link: navlink) => void;
  isMobile?: boolean;
}

type imageProps = {
  src: string;
  alt: string;
  href: string;
};
