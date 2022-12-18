import React, { useState } from "react";
import { MenuLink, MenuLinks, NavButton, NavigationBar, NavigationContainer, OpenMenu } from "./styles";
import Image from "next/image";
import Sidebar from "../SideBar";
import links from "../SideBar/links";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const renderLinks = links.map((item, index) => {
    return <MenuLink key={index}>{item.name}</MenuLink>;
  });
  return (
    <NavigationBar>
      <NavigationContainer>
        <Image
          src="/assets/shared/desktop/logo.svg"
          height={38}
          width={135}
          alt={"Payapi Logo"}
          priority
        />
        <MenuLinks>
          {renderLinks}
        </MenuLinks>
        <NavButton>
            Schedule a Demo
        </NavButton>
        <OpenMenu
          src="/assets/shared/mobile/menu.svg"
          height={17}
          width={28}
          alt={"Menu bar"}
          onClick={handleToggle}
        />
      </NavigationContainer>
      <Sidebar status={menuOpen} toggle={handleToggle} />
    </NavigationBar>
  );
};

export default NavBar;
