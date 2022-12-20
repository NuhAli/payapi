import React from "react";
import {
  Card,
  CardButton,
  CardDescription,
  CardPricing,
  CardSeperation,
  CardTextArea,
  CardTitle,
  ExcludedFeature,
  FeatureText,
  IncludedFeature,
} from "./styles";
import { DM_Serif_Display, Public_Sans } from "@next/font/google";
import Image from "next/image";

export interface IPricing {
  title: string;
  currency: string;
  description: string;
  features: Feature[];
}

export interface Feature {
  name: string;
  status: boolean;
}

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

const PricingCard = ({ title, currency, description, features }: IPricing) => {
  const renderFeatures = features.map((item) => {
    if (item.status) {
      return (
        <IncludedFeature key={item.name}>
          <Image
            src={"/assets/shared/desktop/icon-check.svg"}
            alt={"Check"}
            width={12}
            height={8}
          />
          <FeatureText className={publicSans.className}>
            {item.name}
          </FeatureText>
        </IncludedFeature>
      );
    } else {
      return (
        <ExcludedFeature key={item.name}>
          <Image
            src={"/assets/shared/desktop/icon-check.svg"}
            alt={"Check"}
            width={12}
            height={8}
          />
          <FeatureText className={publicSans.className}>
            {item.name}
          </FeatureText>
        </ExcludedFeature>
      );
    }
  });
  return (
    <Card>
      <CardTextArea className={dm.className}>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={publicSans.className}>
          {description}
        </CardDescription>
        <CardPricing>{`$${currency}`}</CardPricing>
      </CardTextArea>
      <CardSeperation />
      {renderFeatures}
      <CardSeperation />
      <CardButton className={publicSans.className}>Request Access</CardButton>
    </Card>
  );
};

export default PricingCard;
