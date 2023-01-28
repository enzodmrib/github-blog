import styled from 'styled-components'

export const LinkElement = styled.a`
  line-height: 160%;
  font-size: 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};
  border-bottom: 1px solid transparent;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;
`
