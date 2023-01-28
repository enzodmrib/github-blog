import styled from 'styled-components'

export const CardContainer = styled.a`
  cursor: pointer;

  text-decoration: none;
  height: 16.25rem;
  width: 26rem;
  position: relative;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 1px solid transparent;

  transition: border-color 0.2s;

  & > div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  h4 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    width: 16rem;
  }

  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;

    -webkit-line-clamp: 5;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;

    max-height: 8rem;

    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-span']};
    top: 1rem;
    right: 1rem;
  }
`
