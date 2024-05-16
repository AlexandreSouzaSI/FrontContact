import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Contact } from './pages/Contatos'
import { ContactsProviders } from './contexts/ContactsContext'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ContactsProviders>
        <Contact />
      </ContactsProviders>
    </ThemeProvider>
  )
}