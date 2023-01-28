import { useContext } from 'react'
import { Card } from '../../../../components/Card'
import { BlogContext } from '../../../../contexts/BlogContext'
import { ListContainer } from './styles'

export function PostList() {
  const { issues } = useContext(BlogContext)

  return (
    <ListContainer>
      {issues.map((issue) => (
        <Card key={issue.id} issue={issue} />
      ))}
    </ListContainer>
  )
}
