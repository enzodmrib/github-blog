import styled from 'styled-components'

export const PostBodyContainer = styled.section`
  padding: 2.5rem 2rem;

  color: ${(props) => props.theme['base-text']};

  a {
    color: ${(props) => props.theme.blue};
  }

  img {
    margin: 1rem 0;
    width: 100%;
    height: auto;
    border-radius: 6px;
  }
`
