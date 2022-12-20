import styled from "styled-components";

export const BrandSectionArea = styled.div`
  width: 100%;
  height: auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    padding-left: 120px;
  }
`;

export const BrandTitle = styled.h2`
width: 327px;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1846153885126114px;
  text-align: center;
  color: #36536b;
  margin: 0 auto 40px auto;

  @media screen and (min-width: 768px) {
    width: 445px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    text-align: left;
  }
`;

export const BrandContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 120px 120px;
  grid-column-gap: 60px;
  grid-row-gap: 40px;
  justify-items: center;

  @media screen and (min-width: 768px) {
    min-width: 536px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
  }
`;
