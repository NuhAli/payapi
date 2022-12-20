import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 24px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1110px;
  }
`;

export const PricingTitle = styled.h1`
  color: #36536b;
  font-size: 32px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.2461538463830948px;
  text-align: center;
  margin-bottom: 48px;

  @media screen and (min-width: 1440px) {
    width: 1110px;
    font-size: 56px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.4307692348957062px;
    text-align: left;
  }
`;
