import styled from "styled-components";
export const StyledFlex = styled.div`
    display: flex;
    justify-content: ${(prosp) => prosp.justifycontent};
    align-items: ${(prosp) => prosp.alignitens};
    flex-direction:  ${(prosp) => prosp.flexDirection};
    gap:  ${(prosp) => prosp.gap};
    flex-wrap: ${(prosp) => prosp.wrap};
    padding: ${(prosp) => prosp.padding};
`