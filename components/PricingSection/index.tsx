import { DM_Serif_Display, Public_Sans } from "@next/font/google";
import { PricingTitle, Section, SectionWrapper } from "./styles";
import React from "react";
import { data } from "../PropertySection/property-data";
import { pricing } from "./pricingData";
import PricingCard from "../PricingCard";

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

const PricingSection = () => {
  const renderPrices = () => {
    return pricing.map((item) => {
      return (
        <PricingCard
          title={item.title}
          currency={item.currency}
          features={item.features}
          key={item.title}
          description={item.description}
        />
      );
    });
  };
  return (
    <Section>
      <PricingTitle className={dm.className}>Pricing</PricingTitle>
      <SectionWrapper>{renderPrices()}</SectionWrapper>
    </Section>
  );
};

export default PricingSection;
