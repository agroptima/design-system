'use client'
import './ActionsMenu.scss'
import React from 'react'
import { classNames } from '../utils/classNames'
import { IconButton } from './Button'
import { type Horizontal, Popover, PopoverMenu } from './Popover'

export interface ActionsMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: Horizontal
  accessibilityLabel: string
}

function ActionsMenu({
  position = 'left',
  className,
  children,
  accessibilityLabel,
}: ActionsMenuProps) {
  return (
    <div className={classNames('actions-menu', className)}>
      <Popover
        position={position}
        renderButton={({ toggle }) => (
          <IconButton
            accessibilityLabel={accessibilityLabel}
            icon="More"
            onClick={toggle}
          />
        )}
      >
        <PopoverMenu>{children}</PopoverMenu>
      </Popover>
    </div>
  )
}

export { ActionsMenu }
