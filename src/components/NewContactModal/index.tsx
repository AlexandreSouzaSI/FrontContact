import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewContactModal() {
    return (
        <Dialog.Portal>
          <Overlay />
          <Content>
            <Dialog.Title>NOVO CONTATO</Dialog.Title>

            <CloseButton>
                <X size={24}/>
            </CloseButton>

            <form>
                <input type="text" placeholder="Nome Completo" />
                <input type="text" placeholder="idade" />
                <input type="text" placeholder="telefone 1" />
                <input type="text" placeholder="telefone 2" />
                <input type="text" placeholder="telefone 3" />
                <input type="text" placeholder="telefone 4" />
                <input type="text" placeholder="telefone 5" />

                <button type="submit">
                    ADICIONAR
                </button>
            </form>
          </Content>
        </Dialog.Portal>
    )
}