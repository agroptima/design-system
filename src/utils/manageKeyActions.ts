import type { Option } from '../atoms/Select'
import { SELECT_ELEMENTS } from '../atoms/Select/manageSelectElements'
import { type FocusableElement } from '../atoms/Select/Select'

export const KEY_CODES = {
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  ESC: 27,
  ENTER: 13,
  TAB: 9,
  DELETE: 8,
}

interface DropdownActions {
  open: () => void
  close: () => void
  isOpen: boolean
}

interface OptionHandler {
  option?: Option
  handleSelectOption: (option: Option) => void
  handleClear: (event: React.MouseEvent) => void
}

interface FocusableElementHandler {
  focusableElements: FocusableElement[]
  currentFocus: number
  setCurrentFocus: (elementIndex: number) => void
  setIsActive: (boolean: any) => void
  isActive: boolean
}

export function manageKeyActions(
  event: any,
  elementIndex: number,
  { open, close, isOpen }: DropdownActions,
  { option, handleSelectOption, handleClear }: OptionHandler,
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

  if (!isActive) {
    enableActiveFocus()
  }

  const focusedElementId: string = focusableElements[currentFocus]?.id

  switch (event?.keyCode) {
    case KEY_CODES.DOWN_ARROW:
      event.preventDefault()
      if (focusedElementId === SELECT_ELEMENTS.selectButton) {
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
            .indexOf(SELECT_ELEMENTS.selectButton),
        )
        close()
      }

      break

    case KEY_CODES.ESC:
      event.preventDefault()
      if (focusedElementId === SELECT_ELEMENTS.selectButton) {
        setCurrentFocus(elementIndex)
        close()
      }

      if (focusedElementId === option?.id) {
        setCurrentFocus(
          focusableElements
            .map((e) => e.id)
            .indexOf(SELECT_ELEMENTS.selectButton),
        )
        close()
      }
      break

    case KEY_CODES.TAB:
      if (isOpen) close()

      break

    case KEY_CODES.DELETE:
      handleClear(event)
      break
  }
}
