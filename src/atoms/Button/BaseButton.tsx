import NextLink, { type LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, Ref } from 'react'

interface CommonProps {
  disabled?: boolean
  visible?: boolean
  prefetch?: boolean
  ref?: Ref<HTMLAnchorElement | HTMLButtonElement | null>
}

type HtmlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

export type BaseButtonProps =
  | (HtmlButtonProps & CommonProps)
  | (AnchorProps & CommonProps)

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps =>
  'href' in props

export function BaseButton({
  children,
  visible = true,
  prefetch = false,
  ...props
}: BaseButtonProps) {
  if (!visible) return null
  const isLink = !props.disabled && hasHref(props)
  if (isLink) {
    const { href, ...restProps } = props
    return (
      <NextLink href={href} {...restProps} prefetch={prefetch}>
        {children}
      </NextLink>
    )
  }
  return <button {...(props as HtmlButtonProps)}>{children}</button>
}
