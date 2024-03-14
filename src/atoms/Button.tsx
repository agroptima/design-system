import NextLink from 'next/link'
import './Button.scss'
import { Icon, IconType } from './Icon'

export interface BaseButtonProps {
  label: string
  leftIcon?: IconType
  rightIcon?: IconType
  variant?: ButtonVariant
  loading?: boolean
  disabled?: boolean
}

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps =
  | (HtmlButtonProps & BaseButtonProps)
  | (AnchorProps & BaseButtonProps)

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

export function Button({
  label,
  leftIcon,
  rightIcon,
  disabled,
  variant = 'primary',
  loading = false,
  ...props
}: ButtonProps) {
  if (loading) {
    leftIcon = 'Loading'
  }
  const cssClasses = ['button', variant].join(' ')

  if (hasHref(props)) {
    return (
      <NextLink href={props.href || ''} className={cssClasses} {...props}>
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
