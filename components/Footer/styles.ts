import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  min-height: 353px;
  max-height: auto;
  background: #1b262f;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 41px 0 55px 0;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-height: 100px;
    padding: 0 40px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 10;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1111px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const FooterLinks = styled.ul`
  list-style-type: none;
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: 60px;
  }
`;

export const FooterLink = styled.li`
  color: #fbfcfe;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 31px;
  opacity: 0.7;

  @media screen and (min-width: 768px) {
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const SocialLinks = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;

  img {
    margin-right: 24px;
    fill: #fbfcfe;
    &:last-child {
      margin-right: 0;
    }

    @media screen and (min-width: 768px) {
      margin-right: 40px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const BackgroundCircleContaienr = styled.div`
  position: absolute;
  display: block;
  right: -203px;
  bottom: -604px;
  width: 780px;
  height: 780px;
`;
