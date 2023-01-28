import { PostBodyContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { Issue } from '../../../../contexts/BlogContext'

interface PostBodyProps {
  post: Issue
}

export function PostBody({ post }: PostBodyProps) {
  return (
    <PostBodyContainer>
      <ReactMarkdown>{post.body}</ReactMarkdown>
    </PostBodyContainer>
  )
}
