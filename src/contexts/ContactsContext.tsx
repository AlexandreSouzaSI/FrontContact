import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Contact {
    id: string;
    age: string;
    name: string;
    created_at: string;
    validated_at: string | null;
    phone: {
      contact_id: string;
      id: string;
      number: string;
    }[];
  }

  interface CreateContactInput {
    name: string
    age: string
    phone1?: string
    phone2?: string
    phone3?: string
}

interface ContactsContextType {
    contact: Contact[]
    fetchContact: (query?: string) => Promise<void>
    createContact: (data: CreateContactInput) => Promise<void>
    deleteContact: (data: DeleteContactInput) => Promise<void>
    loadContact: () => Promise<void>
}

interface ContactsProviderProps {
    children: ReactNode;
}

interface DeleteContactInput {
    contactId: string;
}


export const ContactsContext = createContext({} as ContactsContextType)

export function ContactsProviders({children}: ContactsProviderProps) {
    const [contact, setContact] = useState<Contact[]>([])
  
    async function fetchContact(query?: string) {
        const response = await api.get('/contact', {
            params: {
                _sort: 'created_at',
                _order: 'desc',
                query: query
            }
        })

        setContact(response.data.contact.contact)
    }

    async function createContact(data: CreateContactInput) {
        const { name, age, phone1, phone2, phone3 } = data
        const response = await api.post('/contact', {
            name,
            age,
            phone1,
            phone2,
            phone3
        })

        setContact(state => [response.data.contact, ...state])
    }

    async function deleteContact(data: DeleteContactInput) {
        const { contactId } = data;
        try {
          await api.delete(`/contact/${contactId}`);
          setContact((prevState) =>
            prevState.filter((item) => item.id !== contactId)
          );
        } catch (error) {
          console.error("Erro ao deletar contato:", error);
        }
      }

    async function loadContact() {
        await fetchContact(); 
    }

    useEffect(() => {
        fetchContact()
    }, [])
    return (
        <ContactsContext.Provider value={{ 
            contact,
            fetchContact,
            createContact,
            deleteContact,
            loadContact
            }}>
            {children}
        </ContactsContext.Provider>
    )
}