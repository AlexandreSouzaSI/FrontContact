import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["orange-300"]};
  padding: 2.5rem 0 3.5rem;
`;

export const HeaderH1 = styled.h1`
    color: ${props => props.theme.white};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;