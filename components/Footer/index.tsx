import React from "react";
import {
  ActionsWrapper,
  BackgroundCircleContaienr,
  FooterLink,
  FooterLinks,
  FooterSection,
  FooterWrapper,
  SocialLinks,
} from "./styles";
import links from "../SideBar/links";
import Image from "next/image";
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

const Footer = () => {
  const renderLinks = links.map((item, index) => {
    return <FooterLink key={index} className={publicSans.className}>{item.name}</FooterLink>;
  });
  return (
    <FooterSection>
      <BackgroundCircleContaienr>
        <Image
          src={"/assets/shared/desktop/bg-pattern-circle.svg"}
          alt={"circles"}
          fill
        />
      </BackgroundCircleContaienr>
      <FooterWrapper>
        <ActionsWrapper>
          <Image
            src="/assets/shared/desktop/logo-footer.svg"
            height={38}
            width={135}
            alt={"Payapi Logo"}
            priority
          />
          <FooterLinks>{renderLinks}</FooterLinks>
        </ActionsWrapper>
        <SocialLinks>
          <Image
            src="/assets/shared/desktop/facebook.svg"
            height={24}
            width={24}
            alt={"Payapi Logo"}
            priority
          />
          <Image
            src="/assets/shared/desktop/twitter.svg"
            height={24}
            width={24}
            alt={"Payapi Logo"}
            priority
          />
          <Image
            src="/assets/shared/desktop/linkedin.svg"
            height={24}
            width={24}
            alt={"Payapi Logo"}
            priority
          />
        </SocialLinks>
      </FooterWrapper>
    </FooterSection>
  );
};

export default Footer;
