import { CartSpan, Coffees, CoffeesList, CoffeeSpan, Content, HomeContainer, ImageContent, PackSpan, TimerSpan } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { coffeesApi } from "../../api/coffeesApi";
import { CoffeeCard } from "../../components/CoffeeCard";


export function Home() {
  return (
    <>
      <HomeContainer>
        <Content>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <section>
            <CartSpan>
              <ShoppingCart size={32} weight="fill" />
              Compra simples e segura
            </CartSpan>
            <PackSpan>
              <Package size={32} weight="fill" />
              Embalagem mantém o café intacto
            </PackSpan>
            <TimerSpan>
              <Timer size={32} weight="fill" />
              Entrega rápida e rastreada
            </TimerSpan>
            <CoffeeSpan>
              <Coffee size={32} weight="fill" />
              O café chega fresquinho até você
            </CoffeeSpan>
          </section>
        </Content>
        <ImageContent>
          <img src="src/assets/coffee-delivery.svg" alt="" />
        </ImageContent>
      </HomeContainer>

      <CoffeesList>
        <h2>Nossos cafés</h2>
        <Coffees>
          {coffeesApi.map(coffee => {
            return (
              <CoffeeCard
                key={coffee.id}
                name={coffee.name}
                description={coffee.description}
                tags={coffee.tags}
                image={coffee.image}
                price={coffee.price}
              />
            )
          })}
        </Coffees>
      </CoffeesList>
    </>
  )
}