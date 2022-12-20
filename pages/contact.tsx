import Head from "next/head";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import DemoSection from "../components/DemoSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PricingSection from "../components/PricingSection";
import ContactForm from "../components/ContactForm";
import { BrandContainer } from "../components/CustomerSection/styles";
import BrandLogo from "../components/BrandLogo";
import { brands } from "../components/CustomerSection/brands";
import BrandArea from "../components/BrandSection";

const MainArea = styled.main`
  position: relative;
`;

const Spacer = styled.div`
  width: 100%;
  height: 126px;

  @media screen and (min-width: 768px) {
    height: 163px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  display: block;
  width: 780px;
  height: 780px;
  left: 74px;
  top: -644px;

  @media screen and (min-width: 768px) {
    left: 505px;
    top: -504px;
  }
  @media screen and (min-width: 1440px) {
    left: 800px;
    top: -527px;
  }
`;

const PageContents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1110px;
    margin: 0 auto;
  }
`;

const ContactPage = () => {
  const renderBrands = () => {
    return brands.map((brand) => {
      return <BrandLogo src={brand.src} alt={brand.name} key={Math.random()} />;
    });
  };

  return (
    <MainArea>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <ImageContainer>
        <Image
          src={"/assets/shared/desktop/bg-pattern-circle.svg"}
          alt={"circle"}
          fill
          priority={true}
        />
      </ImageContainer>
      <Spacer />
      <PageContents>
        <ContactForm />
        <BrandArea />
      </PageContents>
      <DemoSection />
      <Footer />
    </MainArea>
  );
};

export default ContactPage;
