import './InputWithButton.scss'
import React from 'react'

interface InputWithButtonProps {
  children: React.ReactNode
}

export function InputWithButton({ children }: InputWithButtonProps) {
  return <div className="input-with-button">{children}</div>
}
