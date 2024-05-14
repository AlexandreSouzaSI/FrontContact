import { useEffect, useState } from "react";
import { NewContactModal } from "../NewContactModal";
import { SearchForm } from "../SearchForm";
import { ContactContainer, ContactTable, DivButton, NewContactButton } from "./styled";
import * as Dialog from '@radix-ui/react-dialog'

export function Contacts() {

  interface Contact {
    id: string,
    age: string,
    name: string,
    created_at: string,
    validated_at: string | null
    phone: {
      contact_id: string,
      id: string,
      number: string
    }
  }

  const [contact, setContact] = useState<Contact[]>([])
  
  async function loadContact() {
    const response = await fetch('http://localhost:3333/contact')
    const data = await response.json();

    console.log("data", data.contact)
    setContact(data.contact)
  }

  useEffect(() => {
    loadContact()
  }, [])


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
            {contact.map(contact => {
              return (
                <tr key={contact.id}>
                  <td width="50%">Nome: {contact.name}</td>
                  <td>Idade: {contact.age}</td>
                  {contact.phone && contact.phone.length > 0 ? (
                    contact.phone.map((phone, index) => (
                      <td key={index}>{phone.number}</td>
                    ))
                  ) : (
                    <td>Sem Telefone</td>
                  )}
                  <td>
                    <button>
                      EDITAR
                    </button>
                  </td>
                  <td>
                    <button>
                      REMOVER
                    </button>
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