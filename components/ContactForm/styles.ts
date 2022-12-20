import styled from "styled-components";

export const FormArea = styled.div`
  width: 100%;
  max-width: 445px;
  height: auto;
  padding: 0 24px;
  margin: 0 auto 80px auto;

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;
export const FormAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    padding: 0;
  }
`;

export const FormTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.2461538463830948px;
  text-align: center;
  color: #36536b;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 570px;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.3692307770252228px;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
    width: 600px
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border: none;
  border-bottom: 1px solid rgba(54, 83, 107, 0.37);
  background: transparent;
  padding-left: 20px;
  margin-bottom: 24px;

  &::placeholder {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.11538461595773697px;
    text-align: left;
    opacity: 0.5;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 65px;
  border: none;
  border-bottom: 1px solid rgba(54, 83, 107, 0.37);
  background: transparent;
  padding-left: 20px;
  margin-bottom: 24px;
  resize: none;

  &::placeholder {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.11538461595773697px;
    text-align: left;
    opacity: 0.5;
  }
`;

export const CheckboxRow = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
`;

export const Checkbox = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 0px;
  background: #36536b;
  opacity: 0.25;
  cursor: pointer;
`;

export const CheckboxText = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.11538461595773697px;
  text-align: left;
  width: 277px;
  margin-left: 51px;
`;

export const Button = styled.div`
  height: 48px;
  width: 152px;
  border: 1px solid #36536b;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.11538461595773697px;
  text-align: left;
  transition: all 0.4s ease;
  color: #36536b;
  &:hover {
    border-color: #36536b;
    background: #36536b;
    color: white;
  }
`;
