'use client'
import './ActionsMenu.scss'
import React from 'react'
import { classNames } from '../utils/classNames'
import { IconButton } from './Button'
import { Popover, PopoverMenu } from './Popover'

export interface ActionsMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function ActionsMenu({ className, children }: ActionsMenuProps) {
  return (
    <div className={classNames('actions-menu', className)}>
      <Popover
        renderButton={({ toggle }) => (
          <IconButton
            accessibilityLabel="More options"
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
