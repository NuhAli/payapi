import styled from "styled-components";
import Image from "next/image";
import { SidebarButton } from "../SideBar/styles";
import Link from "next/link";

export const NavigationBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 40px 24px 0 24px;
  z-index: 11;
`;

export const NavigationContainer = styled.div`
  width: 100%;
  max-width: 1110px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const OpenMenu = styled(Image)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuLinks = styled.ul`
  display: none;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  margin-left: 64px;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const MenuLink = styled(Link)`
  color: #36536b;
  opacity: 0.7;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;

  text-transform: capitalize;
  text-align: center;
  margin-right: 40px;
  cursor: pointer;

  &:last-child {
    margin-right: 0px;
  }
`;

export const NavButton = styled(SidebarButton)`
  width: 173px;
  margin-left: 1rem;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
`;
