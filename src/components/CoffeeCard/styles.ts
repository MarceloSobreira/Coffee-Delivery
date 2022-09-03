import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 16rem;
  height: 19.375rem;
  max-height: 19.375rem;
  
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  img {
    max-width: 7.5rem;
    max-height: 7.5rem;
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${props => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  p {
    margin: 0 1.25rem 2rem;
    font-size: 0.875rem;
    line-height: 1.3;

    text-align: center;

    color: ${props => props.theme['base-label']}
  }
`

export const TagContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  margin-bottom: 1rem;

  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const FooterContent = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  
  section {
    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
    line-height: 1.8;

    span {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 3;
      margin-right: 1.5rem;
    }
  }

  button {
    max-height: 38px;
    border: none;
    background: ${props => props.theme['purple-dark']};
    color: ${props => props.theme.white};

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;
  }
`

export const CountButton = styled.span`
  max-height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.75rem 0.5rem;
  border-radius: 6px;

  margin-right: 0.5rem;

  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-title']};

  button {
    border: none;

    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['purple']};
    cursor: pointer;
  }
`