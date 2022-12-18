import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 280px;
  width: 100%;
  max-width: 328px;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    height: 311px;
    width: 223px;
    margin: 0 10px 0 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const CardIamgeContainer = styled.div`
  display: block;
  position: relative;
  margin-bottom: 33px;
`;

export const CardTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 280px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 350px;
    margin: 0;
  }
`;

export const CardTitle = styled.h3`
  color: #36536b;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.13846154510974884px;
  text-align: center;
  margin-bottom: 16px;
`;

export const CardBody = styled.p`
  color: #6c8294;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.11538461595773697px;
  text-align: center;
`;
