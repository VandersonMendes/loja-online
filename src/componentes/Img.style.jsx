import styled from "styled-components";

export const StyledImg = styled.img`
    width:  ${(prosp) => prosp.width};
    max-width: ${(props) => props.maxWidth};
    max-height: ${(props) => props.maxHeight};
    min-width: ${(props) => props.minWidth};
    object-fit:${(prosp) => prosp.objectFit};
    @media (max-width:600px) {
        width: ${(props) => props.widthEnpoiter1};
        height: ${(props) => props.heightEnpoiter1};
        max-width: ${(props) => props.maxWidthEnpoiter1};
    }
    @media (max-width:400px) {
        width: ${(props) => props.width};
        max-width: ${(props) => props.maxWidthEnpoiter2};
    }
`