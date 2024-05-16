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

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed
        }

        &:not(:disabled):hover {
            background: transparent;
            border: 1px solid ${props => props.theme["green-700"]};
            color: ${props => props.theme["green-700"]};
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
    }

    @media (max-width: 400px) {
        display: flex;
        gap: 1rem;
        width: 50%;
        padding-top: 4rem;

        input {
            flex: 1;
            border-radius: 6px;
            border: 0;
            width: 150px;
            height: 50px;
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
            width: 130px;
            height: 50px;

            border: 0;
            padding: 0.3rem;
            background: transparent;
            border: 1px solid ${props => props.theme["green-500"]};
            color: ${props => props.theme["green-500"]};
            font-weight: bold;
            border-radius: 6px;
            cursor: pointer;

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed
            }

            &:not(:disabled):hover {
                background: transparent;
                border: 1px solid ${props => props.theme["green-700"]};
                color: ${props => props.theme["green-700"]};
                transition: background-color 0.2s, color 0.2s, border-color 0.2s;
            }
        }
  }
`