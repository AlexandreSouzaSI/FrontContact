import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";
import * as z from  'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";

const newContactFormSchema = z.object({
    name: z.string(),
    age: z.string(),
    phone1: z.string().optional(),
    phone2: z.string().optional(),
    phone3: z.string().optional(),
})

type NewContactFormInputs = z.infer<typeof newContactFormSchema>

export function NewContactModal() {
    const { createContact } = useContext(ContactsContext)
    const { 
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewContactFormInputs>({
        resolver: zodResolver(newContactFormSchema)
    })

    async function handleCreateNewContact(data: NewContactFormInputs) {
        const { name, age, phone1, phone2, phone3 } = data

        await createContact({
            name,
            age,
            phone1,
            phone2,
            phone3
        })

        reset()
        window.location.reload()
    }

    return (
        <Dialog.Portal>
          <Overlay />
          <Content>
            <Dialog.Title>NOVO CONTATO</Dialog.Title>

            <CloseButton>
                <X size={24}/>
            </CloseButton>

            <form onSubmit={handleSubmit(handleCreateNewContact)}>
                <input 
                type="text" 
                placeholder="Nome Completo"
                required
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
                    ADICIONAR
                </button>
            </form>
          </Content>
        </Dialog.Portal>
    )
}