import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CardContainer, CountButton, FooterContent, TagContent } from "./styles";

interface CoffeeProps {
  id?: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string

}

export function CoffeeCard({ name, description, price, tags, image }: CoffeeProps) {
  let count = 1;

  function handleIncrementeCount() {
    count += 1;
    console.log(count);

  }
  function handleDecrementeCount() {
    count -= 1;
    console.log(count);

  }

  return (
    <CardContainer>
      <img src={image} alt="" />

      <TagContent>
        {tags.map((tag) => {
          return (
            <span key={tag}>{tag}</span>
          )
        })}
      </TagContent>

      <strong>{name}</strong>
      <p>{description}</p>

      <FooterContent>
        <section>
          R$
          <span>
            {`${" " + price + "0"}`}
          </span>
        </section>

        <CountButton>
          <button >
            <Minus size={14} weight="bold" />
          </button>
          {count}
          <button>
            <Plus size={14} weight="bold" />
          </button>
        </CountButton>

        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </FooterContent>
    </CardContainer>
  )
}