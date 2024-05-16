import * as Dialog from "@radix-ui/react-dialog";
import { ButtonCancel, ButtonRemove, CloseButton, Content, Overlay, Title } from "./styles";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";

type DeleteContactModalProps = {
  contactId: string; 
  onClose: () => void; 
};

export function DeleteContactModal({ contactId, onClose }: DeleteContactModalProps) {
  const { deleteContact } = useContext(ContactsContext)

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleDeleteContact() {
    try {
      setIsSubmitting(true);
      await deleteContact({contactId})
      
      onClose();
      
    } catch (error) {
      console.error("Erro ao deletar contato:", error);
      
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Deletar Contato</Title>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        <p>Deseja realmente deletar este contato?</p>
        <div>
          <ButtonRemove onClick={handleDeleteContact} disabled={isSubmitting}>
            Confirmar
          </ButtonRemove>
          <ButtonCancel onClick={onClose} disabled={isSubmitting}>
            Cancelar
          </ButtonCancel>
        </div>
      </Content>
    </Dialog.Portal>
  );
}
