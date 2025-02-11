export function formatDate(date: string, lng: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString(lng)
}

export function formatDatePickerParamsDate(date: Date | undefined) {
  if (!date) return ''

  return date.toLocaleDateString('sv-SE')
}

export function formatDatePickerFooterDate(
  date: Date | undefined,
  lng: string,
) {
  if (!date) return ''

  return formatDate(formatDatePickerParamsDate(date), lng)
}
