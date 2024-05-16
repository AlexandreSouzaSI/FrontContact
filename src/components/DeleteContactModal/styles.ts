import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 3rem 3rem;
    background: ${props => props.theme["gray-500"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
        margin-left: 2rem;
        margin-bottom: 1rem;
        font-size: 20px;
    }
`

export const ButtonRemove = styled.button`
    width: 10rem;
    height: 3rem;
    margin-right: 5rem;
    color: red;
    font-weight: 200;
`

export const ButtonCancel = styled(Dialog.Close)`
    width: 10rem;
    height: 3rem;
`

export const Title = styled(Dialog.Title)`
    margin-left: 8rem;
    margin-bottom: 1rem;
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${props => props.theme["gray-100"]};
`