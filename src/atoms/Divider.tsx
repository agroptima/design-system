import './Divider.scss'
import Link from 'next/link'
import { classNames } from '../utils/classNames'
import { IconButton } from './Button'
import type { IconType } from './Icon'
import { Icon } from './Icon'

export interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  variant?: string
  icon?: IconType
  iconButton?: IconType
  iconClick?: () => void
  hasAction?: boolean
  onClick?: () => void
}

export function Divider({
  title,
  variant = 'primary',
  icon,
  hasAction,
  className,
  onClick = () => {},
}: DividerProps) {
  const cssClasses = classNames('divider', variant, className)

  return (
    <div role="separator" className={cssClasses}>
      {icon ? (
        <Icon className="icon" name={icon} size="3" />
      ) : (
        <div className="short line"></div>
      )}
      <span onClick={onClick} className={classNames({ link: hasAction })}>
        {title}
      </span>
      <DividerWithIcon icon={icon} />
      {!icon && !iconButton && <div className="short line"></div>}
      <span>{title}</span>
      <div className="long line"></div>
      <DividerWithIconButton iconButton={iconButton} iconClick={iconClick} />
    </div>
  )
}

function DividerWithIconButton({
  iconButton,
  iconClick,
}: {
  iconButton?: IconType
  iconClick?: () => void
}) {
  if (!iconButton) return null
  return (
    <IconButton
      accessibilityLabel="icon button"
      icon={iconButton}
      className="iconButton"
      onClick={iconClick}
    />
  )
}

function DividerWithIcon({ icon }: { icon?: IconType }) {
  if (!icon) return null
  return <Icon className="icon" name={icon} size="3" />
}
