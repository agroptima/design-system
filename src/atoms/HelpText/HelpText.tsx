import './HelpText.scss'
import React from 'react'
import { buildHelpText } from '../../utils/buildHelpText'
import { classNames } from '../../utils/classNames'

export interface HelpTextProps {
  helpText?: string
  errors?: string[]
}

export function HelpText({
  helpText,
  errors = [],
}: {
  helpText?: string
  errors?: string[]
}): React.JSX.Element | null {
  if (!helpText && !errors.length) return null

  const helpTexts = buildHelpText(helpText, errors)

  return (
    <ul
      className={classNames('help-text', {
        invalid: errors.length,
      })}
    >
      {helpTexts.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  )
}
