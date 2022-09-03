import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 90rem;
  max-height: 34rem;
  margin: 5.875rem -10rem 5.5rem -10rem;
  padding: 0 10rem;

  display: flex;
  gap: 3.5rem;

  background-image: url(src/assets/home-background.png);
  background-repeat: round;  
`
export const Content = styled.div`
  h1 {
    color: ${props => props.theme['base-title']};

    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
  }
  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.3;

    color: ${props => props.theme['base-subtitle']}
  }

  section {
    margin-top: 4.125rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    span {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      margin-bottom: 1.25rem;

      svg {
        color: ${props => props.theme.white};
        padding: 0.5rem;
        border-radius: 50%;
      }
    }
  }
`

export const CartSpan = styled.span`
  svg {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
export const PackSpan = styled.span`
   svg {
    background: ${(props) => props.theme['base-text']};
  }
`
export const TimerSpan = styled.span`
   svg {
    background: ${(props) => props.theme['yellow']};
  }
`
export const CoffeeSpan = styled.span`
   svg {
    background: ${(props) => props.theme['purple']};
  }
`

export const ImageContent = styled.div`

`

export const CoffeesList = styled.div`
  margin: 2rem 0 3.375rem;

  h2 {
    font-size: 2rem;
    line-height: 1.3;
  }
`
export const Coffees = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3.375rem;
`