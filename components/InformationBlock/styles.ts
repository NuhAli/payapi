import styled from "styled-components";

export const InformationSection = styled.section`
    width: 100%;
    height: auto;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const InformationSectionWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ImageContainer = styled.div`
    width: 1440px;
    max-width: 100vw;
    height: 300px;
    display: block;
    position: relative;
    object-fit: cover;

    @media screen and (min-width: 1024px) {
        height: 267px;
    }

    @media screen and (min-width: 1440px) {
        height: 500px;
    }
`