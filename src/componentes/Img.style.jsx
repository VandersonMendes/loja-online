import styled from "styled-components";

export const StyledImg = styled.img`
    width:  ${(prosp) => prosp.width};
    max-width: ${(props) => props.maxWidth};
    min-width: ${(props) => props.minWidth};
    object-fit:${(prosp) => prosp.objectFit};
    @media (max-width:600px) {
        width: ${(props) => props.width};
        max-width: ${(props) => props.maxWidthEnpoiter1};
    }
    @media (max-width:400px) {
        width: ${(props) => props.width};
        max-width: ${(props) => props.maxWidthEnpoiter2};
    }
`