import { HeaderContainer, HeaderContent, HeaderH1 } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderH1>Teste Contato</HeaderH1>

        <img src={logoImg} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}