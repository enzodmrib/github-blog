import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'

interface User {
  avatarURL: string
  bio: string
  company: string
  followers: number
  name: string
  profileURL: string
  username: string
}

export interface Issue {
  id: number
  url: string
  number: number
  title: string
  username: string
  comments: number
  createdAt: Date
  body: string
}

interface BlogContextData {
  user: User
  issues: any[]
  getRepoIssues: (textSearch: string) => void
  getCurrentIssue: (issueNumber: number) => Promise<Issue>
}

interface BlogContextProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextData)

export function BlogProvider({ children }: BlogContextProps) {
  const [user, setUser] = useState({} as User)
  const [issues, setIssues] = useState<Issue[]>([])

  const username = 'enzodmrib'
  const repo = 'github-blog'

  const getUser = useCallback(async () => {
    const response = await api.get('/users/enzodmrib')
    const { name, login, bio, company, followers } = response.data

    setUser({
      avatarURL: response.data.avatar_url,
      bio,
      company,
      followers,
      name,
      profileURL: response.data.html_url,
      username: login,
    })
  }, [])

  const getRepoIssues = useCallback(async (textSearch: string = '') => {
    const query = `${textSearch} repo:${username}/${repo}`

    const response = await api.get('/search/issues', {
      params: {
        q: query,
        sort: 'created',
        order: 'asc',
      },
    })

    const responseIssues: Issue[] = response.data.items.map((item: any) => ({
      id: item.id,
      url: item.url,
      number: item.number,
      title: item.title,
      username: item.user.name,
      comments: item.comments,
      createdAt: new Date(item.created_at),
      body: item.body,
    }))

    setIssues(responseIssues)
  }, [])

  const getCurrentIssue = useCallback(async (issueNumber: number) => {
    const requestRoute = `repos/${username}/${repo}/issues/${issueNumber}`

    const response = await api.get(requestRoute)

    const currentIssue: Issue = {
      id: response.data.id,
      url: response.data.html_url,
      number: response.data.number,
      title: response.data.title,
      username: response.data.user.login,
      comments: response.data.comments,
      createdAt: new Date(response.data.created_at),
      body: response.data.body,
    }

    return currentIssue
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <BlogContext.Provider
      value={{ user, issues, getRepoIssues, getCurrentIssue }}
    >
      {children}
    </BlogContext.Provider>
  )
}
