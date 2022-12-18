import React from "react";
import {
  Section,
  SectionWrapper,
  ImageWrapper,
  TextContainer,
  TitleText,
  BodyText,
  BackgroundCircleContainer,
} from "./styles";
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

interface FeatureSection {
  reverse: boolean;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const FeatureSection = ({
  reverse,
  title,
  description,
  image,
  alt,
}: FeatureSection) => {
  return (
    <Section>
      <SectionWrapper reverse={reverse}>
        <ImageWrapper>
          <Image src={image} alt={alt} fill />
        </ImageWrapper>
        <TextContainer reverse={reverse}>
          <TitleText reverse={reverse} className={dm.className}>{title}</TitleText>
          <BodyText reverse={reverse}>{description}</BodyText>
        </TextContainer>
      </SectionWrapper>
      <BackgroundCircleContainer>
        {reverse && (
          <Image
            src={"/assets/shared/desktop/bg-pattern-circle.svg"}
            alt={"circle"}
            fill
          />
        )}
      </BackgroundCircleContainer>
    </Section>
  );
};

export default FeatureSection;
