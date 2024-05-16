import styled from "styled-components";


export const ContactContainer = styled.div`
    //background: ${props => props.theme["green-500"]};
    width: 100%;
    max-width: 1280px;
    margin: 4rem auto 0;
    padding: 0 1rem;
`

export const DivButton = styled.div`
  width: 57%;
  margin-left: 25.3rem;
  display: flex;
  justify-content: space-between;
`

export const NewContactButton = styled.button`
  height: 50px;
  width: 200px;
  border: 0;
  background: ${props => props.theme["orange-300"]};
  color: ${props => props.theme["white"]};
  font-weight: bold;
  border-radius: 6px;
  margin-top: 4rem;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme["orange-100"]};
    transition: background-color 0.2s;
  }
`;

export const SearchContactButton = styled.button`
  height: 50px;
  border: 0;
  background: ${props => props.theme["green-200"]};
  color: ${props => props.theme["white"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin-top: 4rem;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme["orange-100"]};
    transition: background-color 0.2s;
  }
`;

export const ContactTable = styled.table`
  width: 100%;
  min-width: 1280px;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  /* margin-top: 1.5rem; */

  td {
    padding: 1.25rem 1.5rem;
    background: ${props => props.theme["orange-100"]};
    
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    button {
      background: ${props => props.theme["orange-300"]};
      color: ${props => props.theme.white};
      border-color: ${props => props.theme["orange-100"]};
      width: 6rem;
      height: 2rem;
      border-radius: 5px;
      margin-top: -1.4rem;
      cursor: pointer;

      &:hover {
        background: ${props => props.theme["red-600"]};
        transition: background-color 0.2s;
      }
    }
  }
`;