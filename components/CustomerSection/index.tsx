import React from "react";
import {
  BackgroundCircleContainer,
  BrandContainer,
  CustomerAreaBody,
  CustomerAreaButton,
  CustomerAreaText,
  CustomerAreaTitle,
  Section,
  SectionWrapper,
} from "./styles";
import { brands } from "./brands";
import BrandLogo from "../BrandLogo";
import { DM_Serif_Display, Public_Sans } from "@next/font/google";
import Image from "next/image";

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

const CustomerSection = () => {
  const renderBrands = () => {
    return brands.map((brand) => {
      return <BrandLogo src={brand.src} alt={brand.name} key={Math.random()} />;
    });
  };

  return (
    <Section className={dm.className}>
      <BackgroundCircleContainer>
        <Image
          src={"/assets/shared/desktop/bg-pattern-circle.svg"}
          alt={"circles"}
          fill
        />
      </BackgroundCircleContainer>
      <SectionWrapper>
        <BrandContainer>{renderBrands()}</BrandContainer>
        <CustomerAreaText>
          <CustomerAreaTitle className={dm.className}>
            Who we work with
          </CustomerAreaTitle>
          <CustomerAreaBody className={publicSans.className}>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </CustomerAreaBody>
          <CustomerAreaButton className={publicSans.className}>
            About Us
          </CustomerAreaButton>
        </CustomerAreaText>
      </SectionWrapper>
    </Section>
  );
};

export default CustomerSection;
