import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    max-height: auto;
    min-height: 328px;
    padding: 0 24px;
    margin: 80px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

export const SectionWrapper = styled.div`
    width: auto;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }

    @media screen and (min-width: 1440px) {
        width: 1015px;
        justify-content: space-between;
        align-items: center;
    }
`