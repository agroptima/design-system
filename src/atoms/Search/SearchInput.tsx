import './Search.scss'
import { type ComponentProps } from 'react'
import { classNames } from '../../utils/classNames'
import { IconButton } from '../Button'
import { Input } from '../Input'
export interface SearchInputProps extends ComponentProps<'input'> {
  id?: string
  term: string
  onClear: () => void
  searchLabel: string
  clearSearchLabel: string
}

export default function SearchInput({
  id = 'search',
  term,
  className,
  onClear,
  searchLabel,
  clearSearchLabel,
  ...props
}: SearchInputProps) {
  return (
    <div className={classNames('container', className)}>
      <Input
        id={id}
        label={searchLabel}
        icon="Search"
        role="searchbox"
        value={term}
        hideLabel
        {...props}
      />
      {Boolean(term) && (
        <div className="close">
          <IconButton
            tabIndex={-1}
            type="button"
            icon="Close"
            accessibilityLabel={clearSearchLabel}
            onClick={onClear}
          />
        </div>
      )}
    </div>
  )
}
