import { useContext, useState } from "react";
import { NewContactModal } from "../NewContactModal";
import { SearchForm } from "../SearchForm";
import { ContactContainer, ContactTable, DivButton, NewContactButton } from "./styled";
import * as Dialog from '@radix-ui/react-dialog'
import { ContactsContext } from "../../contexts/ContactsContext";
import { DeleteContactModal } from "../DeleteContactModal";
import { EditContactModal } from "../EditContactModal";


export function Contacts() {
  const { contact } = useContext(ContactsContext)
  const [ , setSelectedContactId] = useState<string | null>(null);
  


  const handleCloseModal = () => {
    console.log("fechando o Modal")
    setSelectedContactId(null)
  };

  return (
    <>
    <DivButton>
      <SearchForm />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewContactButton>
              ADICIONAR CONTATO
          </NewContactButton>
        </Dialog.Trigger>
        <NewContactModal />
      </Dialog.Root>
    </DivButton>
      <ContactContainer>
        <ContactTable>
          <tbody>
          {contact && contact.length > 0 && contact.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td width="25%">{contact.name}</td>
                  <td>{contact.age} Anos</td>
                  {contact.phone && contact.phone.length > 0 ? (
                    contact.phone.map((phone, index) => (
                      <td key={index}>Telefone: ({phone.number})</td>
                    ))
                  ) : (
                    <td>Telefone</td>
                  )}
                  <td>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button>
                        EDITAR
                      </button>
                    </Dialog.Trigger>
                      <EditContactModal 
                        contactId={contact.id}
                       />
                  </Dialog.Root>
                  </td>
                  <td>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button>
                        REMOVER
                      </button>
                      </Dialog.Trigger>
                      <DeleteContactModal
                        contactId={contact.id}
                        onClose={handleCloseModal}
                        />
                  </Dialog.Root>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </ContactTable>
      </ContactContainer>
    </>
  );
}