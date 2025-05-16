import type { Option } from '../atoms/Select'
import { type FocusableElement } from '../atoms/Select/Select'
import { SELECT_ELEMENTS } from '../atoms/Select/selectElements'

export const KEY_CODES = {
  UP_ARROW: 38,
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
  setIsActive: (boolean: any) => void
  isActive: boolean
}

export function manageKeyboardActions(
  event: any,
  elementIndex: number,
  { open, toggle, close }: DropdownActions,
  { option, handleSelectOption }: OptionHandler,
  {
    focusableElements,
    currentFocus,
    setCurrentFocus,
    setIsActive,
    isActive,
  }: FocusableElementHandler,
) {
  function enableActiveFocus() {
    setIsActive(true)
    setCurrentFocus(0)
  }

  function disableActiveFocus() {
    setIsActive(false)
    setCurrentFocus(-1)
  }

  if (!isActive) {
    enableActiveFocus()
  }

  const focusedElementId: string = focusableElements[currentFocus]?.id

  switch (event?.keyCode) {
    case KEY_CODES.DOWN_ARROW:
      event.preventDefault()
      if (focusedElementId === SELECT_ELEMENTS.selectContainer) {
        setCurrentFocus(elementIndex)
        open()
      }
      break

    case KEY_CODES.ENTER:
      event.preventDefault()
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
      event.preventDefault()
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
      event.preventDefault()
      close()
      disableActiveFocus()

      break
  }
}
