import { useContext } from "react";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import { ContactsContext } from "../../contexts/ContactsContext";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchContact } = useContext(ContactsContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver((searchFormSchema))
    })

    async function handleSearchContact(data: SearchFormInputs) {
        await fetchContact(data.query)
    }
    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchContact)}>
            <input 
                type="text" 
                placeholder="buque por contato" 
                {...register('query')}/>
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                BUSCAR
            </button>
        </SearchFormContainer>
    )
}