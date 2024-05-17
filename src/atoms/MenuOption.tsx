import './Menu.scss'
import React from 'react'
import { Icon, IconType } from './Icon'
import { classNames } from '../utils/classNames'

export type Variant = 'primary'

export interface MenuOptionProps extends React.ComponentPropsWithoutRef<'li'> {
  variant?: Variant
  icon?: IconType
  title: string
  isSelected?: boolean
}

export function MenuOption({
  variant = 'primary',
  className,
  isSelected = false,
  icon,
  title,
  children,
  onClick,
  ...props
}: MenuOptionProps): React.JSX.Element {
  const cssClasses = classNames('menu-option', variant, className, {
    selected: isSelected,
  })

  function closePreviousSelectedDropdown(currentTarget: HTMLLIElement) {
    document.querySelectorAll('details[open]').forEach((detailElement) => {
      const firstLevelMenuOption = detailElement?.closest('li')
      const currentFirstLevelMenuOption = currentTarget
        ?.closest('details')
        ?.closest('li')

      if (firstLevelMenuOption !== currentFirstLevelMenuOption)
        detailElement.removeAttribute('open')
    })
  }

  function unselectPreviousOption() {
    document
      .querySelectorAll('.selected')
      .forEach((option) => option.classList.remove('selected'))
  }

  function setOptionSelected(event: React.MouseEvent<HTMLLIElement>) {
    event.stopPropagation()

    closePreviousSelectedDropdown(event.currentTarget)
    unselectPreviousOption()

    event.currentTarget.classList.add('selected')
  }

  return (
    <li
      className={cssClasses}
      tabIndex={0}
      role="menuitem"
      // aria-selected
      onClick={setOptionSelected}
      {...props}
    >
      <details open={isSelected}>
        <summary className="container">
          <div className="left">
            {icon && <Icon name={icon} />}
            <span className="title">{title}</span>
          </div>
          <div className="right">
            <Icon name="AngleDown" />
          </div>
        </summary>
        {children}
      </details>
    </li>
  )
}
