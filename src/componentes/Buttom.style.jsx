import styled from "styled-components";
export const StyledButton = styled.button`
    @media (min-width:1400px) {
        font-size:${(prosp) => prosp.fontSize || '2.1rem'}
    }
    padding: ${(props) => props.padding};
    background-color: ${(props) => props.backgroudColor};
    border:1px solid ${(prosp) => prosp.BorderColor};
    border-radius:7px;
    cursor: pointer;
    color: ${(props) => props.color};
    font-size:1.1rem;
    font-weight:600;
    @media (max-width:800px) {
        font-size:0.9rem;
    }
    &:focus{
        outline:none;
    }
`