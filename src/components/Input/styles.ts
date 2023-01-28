import styled from 'styled-components'

export const InputElement = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};

  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => props.theme.blue};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
