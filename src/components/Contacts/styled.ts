import styled from "styled-components";


export const ContactContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 4rem auto 0;
    padding: 0 1rem;

    @media (max-width: 400px) {
      width: 100%;
      width: 100%;
      max-width: 1280px;
      margin: 1rem auto 0;
      padding: 0 0.5rem;
    }
`

export const DivButton = styled.div`
  width: 57%;
  margin-left: 25.3rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    width: 100%;
    margin-left: 0rem;
    display: flex;
    padding: 0 0.5rem;
    justify-content: space-between;
  }
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

  @media (max-width: 400px) {
    height: 50px;
    width: 80px;
    font-size: 10px;
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
  }
`;

export const DivButtonPagination = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  `

export const PaginationButton = styled.button`
  height: 50px;
  width: 200px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border: 0;
  background: ${props => props.theme["orange-300"]};
  color: ${props => props.theme["white"]};
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme["orange-100"]};
    transition: background-color 0.2s;
  }

  @media (max-width: 400px) {
    height: 50px;
    width: 170px;
    margin-top: 1rem;
    border: 0;
    background: ${props => props.theme["orange-300"]};
    color: ${props => props.theme["white"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme["orange-100"]};
      transition: background-color 0.2s;
    }
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

  @media (max-width: 400px) {
    height: 45px;
    border: 0;
    background: ${props => props.theme["green-200"]};
    color: ${props => props.theme["white"]};
    font-weight: bold;
    border-radius: 6px;
    margin-top: 4rem;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme["orange-100"]};
      transition: background-color 0.2s;
    }
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

  @media (max-width: 400px) {
    width: 100%;
    min-width: 100px;
    border-collapse: separate;
    border-spacing: 0 1rem;
    font-size: 12px;
    border-radius: 0;
    /* margin-top: 1.5rem; */

    td {
      padding: 1rem 5rem;
      width: 100%;
      background: ${props => props.theme["orange-100"]};
      display: flex;
      border: 0;
      flex-direction: column;

      &:first-child {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      border-bottom-left-radius: 0px;
      }
      &:last-child {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      

      button {
        background: ${props => props.theme["orange-300"]};
        color: ${props => props.theme.white};
        border-color: ${props => props.theme["orange-100"]};
        width: 8rem;
        height: 2rem;
        font-size: 10px;
        border-radius: 5px;
        margin-top: -1.4rem;
        cursor: pointer;

        &:hover {
          background: ${props => props.theme["red-600"]};
          transition: background-color 0.2s;
        }
      }
  }
}
`;