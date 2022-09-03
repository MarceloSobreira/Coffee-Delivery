import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <a href="">

        <img src="src/assets/logo.svg" alt="" />
      </a>
      <div>
        <span>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </span>
        <a href="#">
          <ShoppingCart size={22} weight="fill" />
        </a>
        <div>0</div>
      </div>
    </HeaderContainer>
  )
}