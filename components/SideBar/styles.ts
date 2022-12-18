import { motion } from "framer-motion";
import styled from "styled-components";

export const SidebarNav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: -200%;
  width: 300px;
  height: 100vh;
  background-color: #1b262f;
  z-index: 10;
`;

export const SidebarContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 48px 26px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CloseButton = styled.div`
  height: auto;
  width: 100%;
  padding-bottom: 24px;
  margin-bottom: 41px;
  border-bottom: 1px solid #979797;
  display: flex;
  justify-content: flex-end;
`;

export const SidebarLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarLink = styled.li`
  color: #fbfcfe;
  opacity: 0.7;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 32px;
`;

export const SidebarButton = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: #ba4270;
  color: #fbfcfe;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.11538461595773697px;
  text-align: center;
  transition: all 0.2s ease
  cursor: pointer;

  &:hover {
    background: #DA6D97;
  }
`;
