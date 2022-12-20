import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 10px;
    width: 223px;
    height: 615px;
    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 582px;
    width: 350px;
    align-items: flex-start;

    margin-right: 30px;
  }
`;

export const CardTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const CardTitle = styled.h2`
  color: #ba4270;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1846153885126114px;
  text-align: center;
  margin-bottom: 81px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
  @media screen and (min-width: 1440px) {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.2461538463830948px;
    text-align: left;
  }
`;

export const CardDescription = styled.p`
  display: none;
  color: #6c8294;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: block;
    margin: 13px 0 19px 0;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const CardPricing = styled.h2`
  color: #36536b;
  font-size: 56px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: -0.4307692348957062px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-family: DM Serif Display;
    font-size: 56px;
    font-weight: 400;
    line-height: 72px;
    letter-spacing: -0.4307692348957062px;
    text-align: left;
  }
`;

export const CardSeperation = styled.hr`
  background: #36536b;
  opacity: 0.25;
  width: 100%;
  margin: 24px 0;
`;

export const Feature = styled.div`
  min-width: 130px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  text-align: center;

  &:last-child {
    margin-bottom: 0px;
  }

  img {
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const IncludedFeature = styled(Feature)`
  img {
    opacity: 1;
  }
`;

export const ExcludedFeature = styled(Feature)`
  img {
    opacity: 0;
  }
  opacity: 0.5;
`;

export const FeatureText = styled.p`
  color: #36536b;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
`;

export const CardButton = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.11538461595773697px;
  text-align: left;
  transition: all 0.4s ease;
  color: #36536b;
  padding: 16px 28px 14px 28px;
  border-radius: 24px;
  border: 1px solid #36536b;
  cursor: pointer;

  &:hover {
    border-color: #36536b;
    background: #36536b;
    color: white;
  }
`;
