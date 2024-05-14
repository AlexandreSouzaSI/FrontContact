import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;
    width: 50%;
    padding-top: 4rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme["green-200"]};
        color: ${props => props.theme.white};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme.white};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0;
        padding: 1rem;
        background: transparent;
        border: 1px solid ${props => props.theme["green-500"]};
        color: ${props => props.theme["green-500"]};
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
            background: transparent;
            border: 1px solid ${props => props.theme["green-700"]};
            color: ${props => props.theme["green-700"]};
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
    }
`