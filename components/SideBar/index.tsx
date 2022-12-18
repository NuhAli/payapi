import React from "react";
import {
  CloseButton,
  SidebarButton,
  SidebarContainer,
  SidebarLink,
  SidebarLinks,
  SidebarNav,
} from "./styles";
import Image from "next/image";
import links from "./links";

interface SidebarProps {
  status: boolean;
  toggle: () => void;
}

const Sidebar = ({ status, toggle }: SidebarProps) => {
  const renderLinks = links.map((item, index) => {
    return <SidebarLink key={index}>{item.name}</SidebarLink>;
  });

  return (
    <SidebarNav
      animate={{
        right: status ? 0 : "-200%",
      }}
    >
      <SidebarContainer>
        <CloseButton>
          <Image
            alt="close-button"
            width={22}
            height={23}
            src={"/assets/shared/mobile/close.svg"}
            onClick={toggle}
          />
        </CloseButton>
        <SidebarLinks>{renderLinks}</SidebarLinks>
        <SidebarButton>Schedule a Demo</SidebarButton>
      </SidebarContainer>
    </SidebarNav>
  );
};

export default Sidebar;
