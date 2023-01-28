import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-top: -5.5rem;
  position: relative;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.75rem;
      line-height: 160%;
      border-bottom: 1px solid transparent;
      color: ${(props) => props.theme.blue};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      transition: border-color 0.2s;

      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }
  }

  & > h1 {
    margin-top: 1.25rem;

    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  & > ul {
    margin-top: 0.75rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    list-style: none;
    color: ${(props) => props.theme['base-span']};

    svg {
      height: 18px;
      width: 18px;
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`
