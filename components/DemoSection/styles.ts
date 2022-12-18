import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1015px;
  height: auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
`;

export const SectionTitle = styled.h3`
  color: #36536b;
  font-size: 32px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.2461538463830948px;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.3692307770252228px;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
`;
