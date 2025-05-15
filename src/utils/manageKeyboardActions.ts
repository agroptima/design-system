import type { Option } from '../atoms/Select'
import { type FocusableElement, SELECT_ELEMENTS } from '../atoms/Select/Select'

const KEY_CODES = {
  DOWN_ARROW: 40,
  ESC: 27,
  ENTER: 13,
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
  setCurrentFocus: (elementIndex: number) => void
}

export function manageKeyboardActions(
  keyCode: number,
  focusedElementId: string,
  { open, toggle, close }: DropdownActions,
  { option, handleSelectOption }: OptionHandler,
  { focusableElements, setCurrentFocus }: FocusableElementHandler,
) {
  switch (keyCode) {
    case KEY_CODES.DOWN_ARROW:
      if (focusedElementId === SELECT_ELEMENTS.selectContainer) {
        open()
      }
      break

    case KEY_CODES.ENTER:
      if (focusedElementId === option?.id) {
        handleSelectOption(option)
        close()
      }

      break

    case KEY_CODES.ESC:
      if (focusedElementId === SELECT_ELEMENTS.selectContainer) {
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

    default:
  }
}
