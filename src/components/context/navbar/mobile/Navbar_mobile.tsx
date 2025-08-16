import React from "react";
import Navbar_link from "../Navbar_link";
import { ExtendedNavLink } from "@/types/app";
import { Navbar__mobile_menulist } from "@/components/ui/styled-components/styled-navbar";

interface Navbar_mobileProps {
  isAuthenticated: boolean;
  navbarlinks: Array<ExtendedNavLink>;
}

const Navbar_mobile: React.FC<Navbar_mobileProps> = ({
  navbarlinks,
  isAuthenticated,
}) => {
  return (
    <>
      <Navbar__mobile_menulist>
        {navbarlinks.map((link) => {
          return <Navbar_link key={link.id} link={link} />;
        })}
        {isAuthenticated && <div></div>}
      </Navbar__mobile_menulist>
    </>
  );
};

export default Navbar_mobile;
