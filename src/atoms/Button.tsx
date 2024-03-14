import NextLink from 'next/link'
import './Button.scss'
import { Icon, IconType } from './Icon'

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
}

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string
}

export interface ButtonProps {
  label: string
  leftIcon?: IconType
  rightIcon?: IconType
  variant?: ButtonVariant
  loading?: boolean
  disabled?: boolean
}

export interface Overload {
  (props: HtmlButtonProps & ButtonProps): JSX.Element
  (props: AnchorProps & ButtonProps): JSX.Element
}

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps =>
  'href' in props

export type ButtonVariant =
  | 'primary'
  | 'primary-ghost'
  | 'primary-outlined'
  | 'neutral'
  | 'neutral-ghost'
  | 'neutral-outlined'
  | 'error'
  | 'error-ghost'
  | 'error-outlined'
  | 'success'
  | 'success-ghost'
  | 'success-outlined'
  | 'info'
  | 'info-ghost'
  | 'info-outlined'
  | 'warning'
  | 'warning-ghost'
  | 'warning-outlined'

export const Button: Overload = ({
  label,
  leftIcon,
  rightIcon,
  disabled,
  variant = 'primary',
  loading = false,
  ...props
}) => {
  if (loading) {
    leftIcon = 'Loading'
  }
  const cssClasses = ['button', variant].join(' ')

  if (hasHref(props)) {
    return (
      <NextLink className={cssClasses} href={props.href || ''} {...props}>
        {leftIcon && <Icon name={leftIcon} />}
        {label}
        {rightIcon && <Icon name={rightIcon} />}
      </NextLink>
    )
  }

  return (
    <button className={cssClasses} disabled={loading || disabled} {...props}>
      {leftIcon && <Icon name={leftIcon} />}
      {label}
      {rightIcon && <Icon name={rightIcon} />}
    </button>
  )
}
