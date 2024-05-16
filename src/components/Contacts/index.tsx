import { useContext, useState } from "react";
import { NewContactModal } from "../NewContactModal";
import { SearchForm } from "../SearchForm";
import { ContactContainer, ContactTable, DivButton, DivButtonPagination, NewContactButton, PaginationButton } from "./styled";
import * as Dialog from '@radix-ui/react-dialog'
import { ContactsContext } from "../../contexts/ContactsContext";
import { DeleteContactModal } from "../DeleteContactModal";
import { EditContactModal } from "../EditContactModal";

const PAGE_SIZE = 5; 

export function Contacts() {
  const { contact } = useContext(ContactsContext);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleCloseModal = () => {
  };

  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

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
            {contact && contact.length > 0 && contact.slice(startIndex, endIndex).map((contactItem) => {
              return (
                <tr key={contactItem.id}>
                  <td width="25%">{contactItem.name}</td>
                  <td>{contactItem.age} Anos</td>
                  {contactItem.phone && contactItem.phone.length > 0 ? (
                    contactItem.phone.map((phone, index) => (
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
                        contactId={contactItem.id}
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
                        contactId={contactItem.id}
                        onClose={handleCloseModal}
                      />
                    </Dialog.Root>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ContactTable>
        {/* Controles de Paginação */}
        <div>
          <DivButtonPagination>
            <PaginationButton onClick={handlePrevPage} disabled={currentPage === 0}>
              Página Anterior
            </PaginationButton>
            <PaginationButton onClick={handleNextPage} disabled={endIndex >= contact.length}>
              Próxima Página
            </PaginationButton>
          </DivButtonPagination>
        </div>
      </ContactContainer>
    </>
  );
}
