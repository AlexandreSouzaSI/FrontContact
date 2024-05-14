import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="buque por contato"/>
            <button type="submit">
                <MagnifyingGlass size={20}/>
                BUSCAR
            </button>
        </SearchFormContainer>
    )
}