import { useContext, useEffect, useState } from 'react'
import { resolvePath, useNavigate, useParams } from 'react-router-dom'
import { BlogContext, Issue } from '../../contexts/BlogContext'
import { PostBody } from './components/PostBody'
import { PostHeader } from './components/PostHeader'
import { PostContainer } from './styles'

export function Post() {
  const navigate = useNavigate()
  const { issueNumber } = useParams()
  const { getCurrentIssue } = useContext(BlogContext)
  const [post, setPost] = useState({} as Issue)

  const fakePost = {
    id: 1557116452,
    url: 'https://github.com/enzodmrib/github-blog/issues/1',
    number: 1,
    title: 'Impulsione sua carreira',
    username: 'enzodmrib',
    comments: 0,
    createdAt: new Date('2023-01-25T18:44:57.000Z'),
    body: 'Pense na sua carreira profissional como uma marca. Sua marca precisa ser sólida, ter credibilidade e ser divulgada. Para se destacar no início da sua carreira ou em qualquer outra etapa dela, avance por alguns atalhos como Eventos de Tecnologia, Hackathons e Projetos Pessoais.\r\n\r\n**Eventos de tecnologia** - Basta acompanhar as comunidades para ficar por dentro dos principais eventos de tecnologia. Desde workshops, para você aprender praticando, a empreendedorismo e conversas, para você acompanhar o avanço da tecnologia. O Networking é outro ponto positivo de fazer parte dos eventos sempre que possível.\r\n\r\n**Hackathons** - Esses são eventos que podem ser definidos como uma disputa prática para profissionais de tecnologia. Os Hackathons te ajudam a ganhar experiência no desenvolvimento de soluções em grupo, indo da ideação ao produto final.\r\n\r\n**Projetos pessoais** - Os projetos pessoais são uma forma de você desenvolver suas habilidades técnicas, criatividade e pensamento crítico. Tudo que você construir se torna bagagem para seu currículo e casos reais para o seu portfólio.\r\n\r\nImportante, adicione tudo que você fizer ao Github e [escreva um bom README](https://blog.rocketseat.com.br/como-fazer-um-bom-readme/).\r\n\r\nTodos seus projetos contam como experiência para seu portfólio, independentemente da complexidade. Como toda sua evolução, a construção do seu portfólio também começa com um primeiro passo e vai avançando de nível.\r\n\r\nMesmo que você acredite que não tem por onde começar, comece. Com o tempo seu conhecimento e projetos vão ganhando forma.\r\n\r\nTá sem ideia de projetos e já quer começar a se desafiar? [Entre no Discover](https://www.rocketseat.com.br/discover), você terá acesso a dezenas de desafios com instruções de como realizá-los.\r\n![182924207-e2786154-bafa-407c-93d0-fca2207b6df8](https://user-images.githubusercontent.com/49743052/214654599-18b260cf-7fd2-4ed6-98a2-2aceb7e80a51.png)\r\n',
  }

  async function getPost() {
    const response = await getCurrentIssue(Number(issueNumber))

    setPost(response)
  }

  useEffect(() => {
    if (issueNumber) {
      getPost()
    } else {
      navigate('/')
    }
  }, [getCurrentIssue, issueNumber, navigate])

  return (
    <PostContainer>
      <PostHeader post={post} />
      <PostBody post={post} />
    </PostContainer>
  )
}
