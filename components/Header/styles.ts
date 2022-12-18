import Image from "next/image";
import styled from "styled-components";
import { SidebarButton } from "../SideBar/styles";

export const HeaderContainer = styled.header`
  min-height: 739px;
  max-height: auto;
  min-width: 100%;
  background-color: #edf3f8;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    width: 1100px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    width: 1110px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const BackgroundCircleContaienr = styled.div`
  position: absolute;
  display: block;
  left: -190px;
  top: -550px;
  width: 780px;
  height: 780px;

  @media screen and (min-width: 768px) {
    height: 949px;
    width: 949px;
    left: -91px;
    top: -663px;
  }
  @media screen and (min-width: 1440px) {
    height: 780px;
    width: 780px;
    left: 800px;
    top: -172px;
  }
`;

export const BackgroundCircle = styled(Image)`
  width: 780px;
  height: 780px;

  @media screen and(min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    height: 780px;
    width: 780px;
  }
`;

export const PhoneImageContainer = styled.div`
  width: 220px;
  height: 360px;
  position: relative;
  top: 30px;
  left: 10px;
  display: block;

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 360px;
    height: 620px;
    top: 50px;
  }
`;

export const PhoneImage = styled(Image)`
  z-index: 9;
`;

export const HeaderTitle = styled.div`
  max-width: 573px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2461538463830948px;
  text-align: center;
  color: #36536b;

  @media screen and (min-width: 768px) {
    margin: 0 1rem;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.3692307770252228px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    font-size: 72px;
    font-weight: 400;
    line-height: 72px;
    letter-spacing: -0.5538461804389954px;
    text-align: left;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 24px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 445px;
    flex-direction: row;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 24px;
  background: #fbfcfe;
  box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
  outline: none;
  padding: 27px 16px;
  color: #36536B;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;

  &::placeholder {
    color: #36536b;
    opacity: 0.5;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    padding-right: 173px;
  }
`;

export const InputButton = styled(SidebarButton)`
  margin-top: 16px;
  padding: 27px 16px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: #ba4270;
  color: #fbfcfe;
  font-family: "Public Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.11538461595773697px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    margin-top: 0;
    width: 173px;
  }
`;

export const ContactText = styled.p`
  margin-top: 24px;
  font-family: "Public Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #6c8294;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;

  &::placeholder {
    font-weight: 700;
  }

  span {
    font-weight: bold;
  }
`;
