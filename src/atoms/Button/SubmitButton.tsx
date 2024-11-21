'use client'
import type { ButtonProps } from './Button'
import { Button } from './Button'
import { useFormStatus } from 'react-dom'

export type SubmitButtonProps = ButtonProps

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus()
  return <Button {...props} type="submit" loading={pending} />
}
