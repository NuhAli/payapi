import styled from "styled-components";

export const TeamInformationSection = styled.section`
  width: 100%;
  max-width: 920px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;

  &:first-child {
    padding-top: 1rem;
    border-top: 1px solid #36536b;
    opacity: 0.25;
  }

  &:last-child {
    border-bottom: 1px solid #36536b;
    opacity: 0.25;
    padding-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const InformationTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
  color: #36536b;
  margin-bottom: 1rem;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    display: none;
    border-top: 1px solid #36536b;
  }
`;
export const InformationDescription = styled.p`
  font-size: 56px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: -0.4307692348957062px;
  vertical-align: top
  text-align: center;
  color: #ba4270;

  @media screen and (min-width: 768px) {
    border-bottom: 1px solid #36536b;
  }
`;

export const Border = styled.hr`
  width: 100%;
  height: 1px;
  background: #36536b;
  opacity: 0.25;

  &:first-child {
    margin-top: 48px;
  }

  &:last-child {
    margin-top: 16px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
