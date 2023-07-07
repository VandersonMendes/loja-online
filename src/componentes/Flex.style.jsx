import styled from "styled-components";
export const StyledFlex = styled.div`
    display: flex;
    justify-content: ${(prosp) => prosp.justifycontent};
    align-items: ${(prosp) => prosp.alignitens};
    flex-direction:  ${(prosp) => prosp.flexDirection};
    gap:  ${(prosp) => prosp.gap};
    flex-wrap: ${(prosp) => prosp.wrap};
    padding: ${(prosp) => prosp.padding1};
    @media (max-width:800px) {
        flex-direction:  ${(prosp) => prosp.flexDirection2};
    }
    @media (max-width:600px) {
        flex-direction:  ${(prosp) => prosp.flexDirection1};
    }
`