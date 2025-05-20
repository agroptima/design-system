import type { Option } from '.'

export interface SelectElement {
  [index: string]: string
}

let SELECT_ELEMENTS: SelectElement = {}

function defineSelectElements(id: string) {
  SELECT_ELEMENTS = {
    selectButton: `${id}-button`,
    search: `${id}-search`,
  }
}

function initFocusableElements(isSearchable: boolean, options: Option[]) {
  const elements = [
    {
      id: SELECT_ELEMENTS.selectButton,
    },
  ]

  if (isSearchable)
    elements.push({
      id: SELECT_ELEMENTS.search,
    })

  options.forEach((option) => elements.push({ id: option.id }))

  return elements
}

export { defineSelectElements, initFocusableElements, SELECT_ELEMENTS }
