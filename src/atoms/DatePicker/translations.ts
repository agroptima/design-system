interface Translation {
  [index: string]: { [index: string]: string }
}

export const translations: Translation = {
  en: {
    pickDate: 'Pick a day or a range of dates',
    selectedDate: 'Selected date: ${date}',
    selectedRangeOfDates: 'Selected dates range: from ${from} to ${to}',
  },
  es: {
    pickDate: 'Selecciona un día o un rango de fechas',
    selectedDate: 'Fecha seleccionada: ${date}',
    selectedRangeOfDates: 'Rango de fechas seleccionado: desde ${from} a ${to}',
  },
}
