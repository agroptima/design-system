import type { Option } from '../atoms/Select'
import { type FocusableElement, SELECT_ELEMENTS } from '../atoms/Select/Select'

const KEY_CODES = {
  DOWN_ARROW: 40,
  ESC: 27,
  ENTER: 13,
  TAB: 9,
}

interface DropdownActions {
  open: () => void
  toggle: () => void
  close: () => void
}

interface OptionHandler {
  option?: Option
  handleSelectOption: (option: Option) => void
}

interface FocusableElementHandler {
  focusableElements: FocusableElement[]
  currentFocus: number
  setCurrentFocus: (elementIndex: number) => void
}

export function manageKeyboardActions(
  keyCode: number,
  elementIndex: number,
  { open, toggle, close }: DropdownActions,
  { option, handleSelectOption }: OptionHandler,
  { focusableElements, currentFocus, setCurrentFocus }: FocusableElementHandler,
) {
  const focusedElementId: string = focusableElements[currentFocus].id

  switch (keyCode) {
    case KEY_CODES.DOWN_ARROW:
      if (focusedElementId === SELECT_ELEMENTS.selectContainer) {
        setCurrentFocus(elementIndex)
        open()
      }
      break

    case KEY_CODES.ENTER:
      if (focusedElementId === option?.id) {
        handleSelectOption(option)
        setCurrentFocus(
          focusableElements
            .map((e) => e.id)
            .indexOf(SELECT_ELEMENTS.selectContainer),
        )
        close()
      }

      break

    case KEY_CODES.ESC:
      if (focusedElementId === SELECT_ELEMENTS.selectContainer) {
        setCurrentFocus(elementIndex)
        close()
      }

      if (focusedElementId === option?.id) {
        setCurrentFocus(
          focusableElements
            .map((e) => e.id)
            .indexOf(SELECT_ELEMENTS.selectContainer),
        )
        close()
      }
      break

    case KEY_CODES.TAB:
      close()

      break

    default:
  }
}
