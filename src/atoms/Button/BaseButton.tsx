import NextLink from 'next/link'

interface CommonProps {
  disabled?: boolean
}

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export type BaseButtonProps = (
  | (HtmlButtonProps & CommonProps)
  | (AnchorProps & CommonProps)
) & {
  visible?: boolean
}

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps =>
  'href' in props

export function BaseButton({
  children,
  visible = true,
  ...props
}: BaseButtonProps) {
  if (visible) return null
  if (hasHref(props)) {
    return (
      <NextLink href={props.href || ''} {...props}>
        {children}
      </NextLink>
    )
  }

  return <button {...(props as HtmlButtonProps)}>{children}</button>
}
