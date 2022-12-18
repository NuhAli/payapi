import React from "react";
import { Section, SectionTitle, SectionWrapper } from "./styles";
import { DM_Serif_Display, Public_Sans } from "@next/font/google";
import { Input, InputButton, InputContainer } from "../Header/styles";

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

const DemoSection = () => {
  return (
    <Section>
      <SectionWrapper>
        <SectionTitle className={dm.className}>
            Ready to start ?
        </SectionTitle>
        <InputContainer>
            <Input placeholder="Enter email address" />
            <InputButton>Schedule a Demo</InputButton>
          </InputContainer>
      </SectionWrapper>
    </Section>
  );
};

export default DemoSection;
