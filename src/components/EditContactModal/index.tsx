import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";
import * as z from  'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useContext, useEffect, useState } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";

const newContactFormSchema = z.object({
    name: z.string(),
    age: z.string(),
    phone1: z.string().optional(),
    phone2: z.string().optional(),
    phone3: z.string().optional(),
})

interface Contact {
    id: string;
    name: string;
    age: string;
    phone?:{
        id: string,
        number: string,
    }[]
}

interface EditContactInput {
    contactId: string,
}

type NewContactFormInputs = z.infer<typeof newContactFormSchema>

export function EditContactModal({contactId}: EditContactInput) {
    const {contact, loadContact } = useContext(ContactsContext)
    const [contactSelected, setContactSelected] = useState<Contact | null>(null);

    useEffect(() => {
        const selectedContact = contact.find((item) => item.id === contactId);
        setContactSelected(selectedContact || null); 
    }, [contact, contactId]);

    const { 
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
        setValue,
    } = useForm<NewContactFormInputs>({
        resolver: zodResolver(newContactFormSchema)
    })

    useEffect(() => {
        if (contactSelected) {
            setValue('name', contactSelected.name);
            setValue('age', contactSelected.age);
            setValue('phone1', contactSelected.phone?.[0].number);
            setValue('phone2', contactSelected.phone?.[1].number);
            setValue('phone3', contactSelected.phone?.[2].number);
        }
    }, [contactSelected, setValue]);

    async function handleEditContact(data: NewContactFormInputs) {
        const { name, age, phone1, phone2, phone3 } = data;
      
        try {
          const response = await api.get(`/contact/${contactSelected?.id}`);
      
          const updatedContact = { ...response.data.contact };
      
          if (updatedContact.phone && updatedContact.phone.length >= 1) {
            updatedContact.phone[0].number = phone1;
          }
          if (updatedContact.phone && updatedContact.phone.length >= 2) {
            updatedContact.phone[1].number = phone2;
          }
          if (updatedContact.phone && updatedContact.phone.length >= 3) {
            updatedContact.phone[2].number = phone3;
          }
      
          await api.put(`/contact/update/${contactSelected!.id}`, {
            name,
            age,
            phone1: updatedContact.phone[0],
            phone2: updatedContact.phone[1],
            phone3: updatedContact.phone[2],
          });
      
          loadContact();
          reset();
          window.location.reload()
        } catch (error) {
          console.error('Erro ao editar contato:', error);
        }
      }

    return (
        <Dialog.Portal>
          <Overlay />
          <Content>
            <Dialog.Title>EDITAR CONTATO</Dialog.Title>

            <CloseButton>
                <X size={24}/>
            </CloseButton>

            <form onSubmit={handleSubmit(handleEditContact)}>
                <input 
                type="text"
                placeholder="Nome Completo"
                {...register('name')}
                />
                <input 
                type="text" 
                placeholder="idade" 
                {...register('age')}
                />
                <input 
                type="text" 
                placeholder="telefone 1" 
                {...register('phone1')}
                />
                <input 
                type="text" 
                placeholder="telefone 2" 
                {...register('phone2')}
                />
                <input 
                type="text" 
                placeholder="telefone 3" 
                {...register('phone3')}
                />
                    <button type="submit" disabled={isSubmitting}>
                        EDITAR
                    </button>
            </form>
          </Content>
        </Dialog.Portal>
    )
}