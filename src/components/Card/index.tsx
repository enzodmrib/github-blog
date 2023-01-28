import { Issue } from '../../contexts/BlogContext'
import ptBR from 'date-fns/locale/pt-BR'
import { CardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'

interface CardProps {
  issue: Issue
}

export function Card({ issue }: CardProps) {
  return (
    <CardContainer href={`/posts/${issue.number}`}>
      <div>
        <h4>{issue.title}</h4>
        <span>
          {formatDistanceToNow(new Date(issue.createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{issue.body}</p>
    </CardContainer>
  )
}
