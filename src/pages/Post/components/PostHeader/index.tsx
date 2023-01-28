import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from '../../../../components/Link'
import { Issue } from '../../../../contexts/BlogContext'
import { PostHeaderContainer } from './styles'

interface PostHeaderProps {
  post: Issue
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <div>
        <a href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          VOLTAR
        </a>
        <a href={post.url} target="_blank" rel="noreferrer">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <h1>{post.title}</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {post.username}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          {post.createdAt &&
            formatDistanceToNow(new Date(post.createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {post.comments} comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
