import styled from "styled-components";
export const StyledH1 = styled.h1`
    @media (min-width:1400px) {
        font-size:5rem;
    }
    font-size: 4rem;
    color: ${(prop) => prop.color};
    background-color:${(prosp) => prosp.backgroundColor};
    font-weight: ${(prop) => prop.weight};
    line-height: ${(prosp) => prosp.lineHeight};
    @media (max-width:1200px) {
        font-size: 3.35rem;
    }
    @media (max-width:1200px) {
        font-size: 2.95rem;
    }
    @media (max-width:800px) {
        font-size: 2.6rem;
        line-height: ${(prosp) => prosp.lineHeight1};
    }
    @media (max-width:600px) {
        font-size: 2rem;
    }
    @media (max-width:400px) {
        font-size: 1.8rem;
    }
    @media (max-width:350px) {
        font-size: 1.6rem;
    }
`
export const StyledH2 = styled.h2`
    @media (min-width:1400px) {
        font-size:3.5rem;
    }
    font-size: 3rem;
    letter-spacing: ${(prosp) => prosp.letterSpacing};
    color: ${(prosp) => prosp.color};
    background-color:${(prosp) => prosp.backgroundColor};
    font-weight: ${(prosp) => prosp.weight};
    cursor: pointer;
    @media (max-width:1200px) {
        font-size:2.5rem;
    }
    @media (max-width:800px) {
        font-size: 2.2rem;
    }
    @media (max-width:600px) {
        font-size: 1.8rem;
    }
    @media (max-width:400px) {
        font-size: 1.7rem;
    }
    @media (max-width:350px) {
        font-size: 1.5rem;
    }
`
export const StyledH3 = styled.h3`
    @media (min-width:1400px) {
        font-size: ${(prosp) => prosp.fontSize || '2.25rem'};
    }
    font-size: 2.25rem;
    letter-spacing: ${(prosp) => prosp.letterSpacing};
    color: ${(prosp) => prosp.color};
    font-weight: ${(prop) => prop.weight};
    line-height: ${(prosp) => prosp.lineHeight};
    cursor: pointer;
    @media (max-width:1200px) {
        font-size:1.95rem;
    }
    @media (max-width:800px) {
        font-size: 1.7rem;
        line-height: ${(prosp) => prosp.lineHeight1};
    }
    @media (max-width:600px) {
        font-size: 1.2rem;
    }
    @media (max-width:400px) {
        font-size: 1.2rem;
        line-height: ${(prosp) => prosp.lineHeight2};
    }
    @media (max-width:350px) {
        font-size: 1.1rem;
    }
`
export const StyledH4 = styled.h4`
    @media (min-width:1400px) {
        font-size: ${(prosp) => prosp.fontSize || '1.7rem'};
    }
    font-size: 1.25rem;
    letter-spacing: ${(prosp) => prosp.letterSpacing};
    color: ${(prosp) => prosp.color};
    font-weight: ${(prop) => prop.weight};
    line-height: ${(prosp) => prosp.lineHeight};
    background-color:${(prosp) => prosp.backgroundColor};
    cursor: pointer;
    @media (max-width:1200px) {
        font-size: 1.2rem;
    }
    @media (max-width:800px) {
        font-size:1.1rem;
    }
    @media (max-width:600px) {
        font-size:1.1rem;
    }
    @media (max-width:400px) {
        font-size: 0.9rem;
    }
`
export const StyledSpan = styled.span`
    @media (min-width:1400px) {
        font-size: ${(prosp) => prosp.fontSize || '2.25rem'};
    }
    font-size: 1.25rem;
    letter-spacing: ${(prosp) => prosp.letterSpacing};
    color: ${(prosp) => prosp.color};
    background-color: ${(prosp) => prosp.backgroundColor};
    font-weight: ${(prosp) => prosp.weight};
    line-height: ${(prosp) => prosp.lineHeight};
    border-radius: ${(prosp) => prosp.borderRadius};
    cursor: pointer;
    @media (max-width:1200px) {
        font-size: 1.15rem;
    }
    @media (max-width:800px) {
        font-size:1rem;
    }
    @media (max-width:600px) {
        font-size:0.9rem;
    }
    @media (max-width:400px) {
        font-size: 0.8rem;
    }
`

export const StyledParagrafo = styled.p`
    @media (min-width:1400px) {
        font-size: ${(prosp) => prosp.fontSize || '2.25rem'};
    }
    font-size: 1.25rem;
    letter-spacing: ${(prosp) => prosp.letterSpacing};
    color: ${(prosp) => prosp.color};
    background-color: ${(prosp) => prosp.backgroundColor};
    font-weight: ${(prosp) => prosp.weight};
    line-height: ${(prosp) => prosp.lineHeight};
    border-radius: ${(prosp) => prosp.borderRadius};
    cursor: pointer;
    @media (max-width:1200px) {
        font-size: 1.15rem;
    }
    @media (max-width:800px) {
        font-size:1rem;
    }
    @media (max-width:600px) {
        font-size:0.9rem;
    }
    @media (max-width:400px) {
        font-size: 0.8rem;
    }
`