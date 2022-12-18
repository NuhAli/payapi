import React from "react";
import {
  BackgroundCircle,
  BackgroundCircleContaienr,
  ContactText,
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  Input,
  InputButton,
  InputContainer,
  PhoneImage,
  PhoneImageContainer,
  Title,
} from "./styles";
import { DM_Serif_Display, Public_Sans } from "@next/font/google";

const dm = DM_Serif_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700", "800"],
});

const Header = () => {
  return (
    <HeaderContainer className={dm.className}>
      <BackgroundCircleContaienr>
        <BackgroundCircle
          src={"/assets/shared/desktop/bg-pattern-circle.svg"}
          alt={"circles"}
          fill
        />
      </BackgroundCircleContaienr>
      <HeaderWrapper>
        <PhoneImageContainer>
          <PhoneImage
            src={"/assets/home/desktop/illustration-phone-mockup.svg"}
            alt="Phone"
            fill
          />
        </PhoneImageContainer>
        <HeaderTitle>
          <Title>Start building with our APIs for absolutely free.</Title>
          <InputContainer>
            <Input placeholder="Enter email address" />
            <InputButton>Schedule a Demo</InputButton>
          </InputContainer>
          <ContactText>
            Have any questions? <span>Contact Us</span>
          </ContactText>
        </HeaderTitle>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
