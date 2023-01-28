import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AvatarImg, ProfileContainer, ProfileDetails } from './styles'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { memo, useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { Link as GitHubProfileLink } from '../../../../components/Link'

function ProfileComponent() {
  const { user } = useContext(BlogContext)
  const { avatarURL, name, username, bio, company, followers, profileURL } =
    user

  return (
    <ProfileContainer>
      <AvatarImg src={avatarURL} />
      <ProfileDetails>
        <h1>{name}</h1>
        <p>{bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {username}
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {company}
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            {followers} seguidores
          </li>
        </ul>
      </ProfileDetails>
      <GitHubProfileLink href={profileURL} target="_blank">
        GITHUB
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </GitHubProfileLink>
    </ProfileContainer>
  )
}

export const Profile = memo(ProfileComponent)
