import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  background: #1b262f;
  position: relative;
  overflow: hidden;
`;

export const BackgroundCircleContainer = styled.div`
  position: absolute;
  height: 780px;
  width: 780px;
  left: -202px;
  top: -602px;

  @media screen and (min-width: 768px) {
    left: -6px;
    top: -548px;
  }
  @media screen and (min-width: 1440px) {
    left: -235px;
    top: -359px;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 24px;

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 1110px;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const BrandContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 40px;

  @media screen and (min-width: 768px) {
    min-width: 536px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CustomerAreaText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 56px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 457px;
  }
  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const CustomerAreaTitle = styled.h2`
  font-family: "DM Serif Display", serif;
  color: #fbfcfe;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2461538463830948px;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (min-width: 1440px) {
    text-align: left;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.3692307770252228px;
  }
`;

export const CustomerAreaBody = styled.p`
  color: #fbfcfe;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
  opacity: 70%;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const CustomerAreaButton = styled.div`
  margin-top: 60px;
  border: 1px solid #fbfcfe;
  border-radius: 24px;
  padding: 16px 32px;
  color: #fbfcfe;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.11538461595773697px;
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: white;
    background: white;
    color: black;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;
