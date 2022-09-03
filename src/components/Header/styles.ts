import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 2rem 0;

  display: flex;

  div {
    margin-left: auto;
    display: flex;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;
      margin-right: 0.75rem;

      font-size: 0.875rem;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      border-radius: 6px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 6px;
    }

    div {
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;

      border-radius: 50%;
      margin: -2rem 0 0 -0.75rem;
    }


  }
`