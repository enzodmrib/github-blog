import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { BlogContext } from '../../../../contexts/BlogContext'
import { FormContainer } from './styles'
import zod, { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { issues, getRepoIssues } = useContext(BlogContext)
  const { register, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  const value = watch('search')

  /**
   * Another method would be to receive only one request and filter
   * the results on the frontend
   */
  useEffect(() => {
    /**
     * setTimeout returns Timeout ID, which will be cleared anyway
     * however, if "value" changes, the timeout is cleared before
     * execution
     */
    const getData = setTimeout(() => {
      getRepoIssues(value)
    }, 1000)

    return () => clearTimeout(getData)
  }, [getRepoIssues, value])

  return (
    <FormContainer>
      <div>
        <h3>Publicações</h3>
        <span>{issues.length} Publicações</span>
      </div>
      <Input placeholder="Buscar conteúdo" {...register('search')} />
    </FormContainer>
  )
}
