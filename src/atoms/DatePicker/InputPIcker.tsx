import 'react-day-picker/style.css'
import './DatePicker.scss'
import { Input } from '../Input'

export interface InputPickerProps {
  value: string
  onSelect?: (value: string) => void
  withInput?: boolean
}

export function InputPicker({
  onSelect = () => {},
  value,
  withInput = false,
}: InputPickerProps): React.JSX.Element {
  const type = withInput ? 'text' : 'hidden'

  return (
    <div>
      <Input type={type} label={''} value={value} icon="Calendar" />
    </div>
  )
}
