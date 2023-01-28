import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  position: relative;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  display: flex;
  align-items: center;
  gap: 2rem;

  & > a {
    position: absolute;
    top: 2.5rem;
    right: 2rem;
  }
`

export const AvatarImg = styled.img`
  border-radius: 8px;
  height: 9.25rem;
  width: 9.25rem;
`

export const ProfileDetails = styled.div`
  & > h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  & > p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  & > ul {
    margin-top: 1.5rem;

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
