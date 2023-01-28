import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostList } from './components/PostList'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
      <PostList />
    </BlogContainer>
  )
}
