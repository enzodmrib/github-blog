import styled from 'styled-components'

export const FormContainer = styled.form`
  margin-top: 4.5rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h3 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    & > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  & > input {
    margin-top: 0.75rem;
  }
`
