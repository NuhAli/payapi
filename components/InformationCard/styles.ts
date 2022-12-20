import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 689px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    max-width: 920px;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto 64px auto;

    &:last-child {
      margin-bottom: 92px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 112px;
    margin-bottom: 56px;
    &:last-child {
      margin-bottom: 100px;
    }
  }
`;

export const CardTitle = styled.h2`
  color: #36536b;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1846153885126114px;
  text-align: center;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    max-width: 223px;
    text-align: left;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.2461538463830948px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 285px;
    text-align: left;
  }
`;

export const CardDescription = styled.p`
  color: #6c8294;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 456px;
    text-align: left;
  }
  @media screen and (min-width: 1440px) {
    max-width: 635px;
    text-align: left;
  }
`;
