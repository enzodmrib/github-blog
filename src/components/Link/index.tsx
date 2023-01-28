import { AnchorHTMLAttributes } from 'react'
import { LinkElement } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ children, ...props }: LinkProps) {
  return <LinkElement {...props}>{children}</LinkElement>
}
