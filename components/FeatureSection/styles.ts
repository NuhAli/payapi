import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  &:last-child {
    margin-bottom: 100px;
  }
`;

export const SectionWrapper = styled.div<{ reverse: boolean }>`
  margin: 0 auto;
  height: auto;
  max-width: 573px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  @media screen and (min-width: 1440px) {
    max-width: 1115px;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    justify-content: space-between;
    margin: 0;
  }
`;

export const BackgroundCircleContainer = styled.div`
  position: absolute;
  height: 780px;
  width: 780px;
  right: -150px;
  top: -150px;
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 328px;
  height: 209px;
  position: relative;
  display: block;
  margin-bottom: 30px;
  z-index: 12;
  @media screen and (min-width: 768px) {
    width: 410px;
    height: 250px;
  }
  @media screen and (min-width: 1440px) {
    width: 445px;
    height: 284px;
  }
`;

export const TextContainer = styled.div<{ reverse: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    padding-left: ${(props) => (props.reverse ? 0 : "160px")};
    padding-right: ${(props) => (props.reverse ? "160px" : 0)};
  }
`;

export const TitleText = styled.h3<{ reverse: boolean }>`
  color: #36536b;
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.2769230902194977px;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.3692307770252228px;
  }
`;

export const BodyText = styled.p<{ reverse: boolean }>`
  position: relative;
  color: #6c8294;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    text-align: left;
    width: 445px;
  }
`;
