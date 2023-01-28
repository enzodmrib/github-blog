import { forwardRef, InputHTMLAttributes } from 'react'
import { InputElement } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <InputElement ref={ref} {...props} />
  },
)

Input.displayName = 'Input' // Wtf
