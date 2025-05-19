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

export { defineSelectElements, SELECT_ELEMENTS }
