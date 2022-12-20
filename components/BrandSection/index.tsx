import React from "react";
import { brands } from "../CustomerSection/brands";
import BrandLogo from "../BrandLogo";
import { BrandSectionArea, BrandTitle,BrandContainer } from "./styles";
import { DM_Serif_Display } from "@next/font/google";

const dm = DM_Serif_Display({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400"],
  });

const BrandArea = () => {
  const renderBrands = () => {
    return brands.map((brand) => {
      return (
        <BrandLogo src={brand.srcMobile} alt={brand.name} key={Math.random()} />
      );
    });
  };
  return (
    <BrandSectionArea>
      <BrandTitle className={dm.className}>
        Join thousands of innovators already building with us
      </BrandTitle>
      <BrandContainer>{renderBrands()}</BrandContainer>
    </BrandSectionArea>
  );
};

export default BrandArea;
