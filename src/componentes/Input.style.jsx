import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 7px;
  padding: ${(props) => props.padding};
  height: 30px;
  transition: 1s ease-in-out;
  padding: 1.4rem 1rem;
  border: 2px solid ${(props) => props.colorBorder};
  font-size: 18px;
  outline:none;

  background-color${(prosp) => prosp.backgroudColor}
  &:focus {
    border-color: #f9ca24;
    transition: 209ms ease-in;
  }
  @media (max-width: 800px) {
    font-size: 14px;
    padding: 1.2rem 0.8rem;
  }
`;
