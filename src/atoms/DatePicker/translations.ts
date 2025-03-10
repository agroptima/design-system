interface Translation {
  [index: string]: { [index: string]: string }
}

export const translations: Translation = {
  en: {
    pickDate: 'Pick a day or a range of dates',
    pickSingleDate: 'Pick a date',
    selectedDate: 'Selected date: ${date}',
    selectedRangeOfDates: 'Selected dates range: from ${from} to ${to}',
    selectedOnlyFrom: 'Selected dates range: from ${from}',
  },
  es: {
    pickDate: 'Selecciona un día o un rango de fechas',
    pickSingleDate: 'Selecciona una fecha',
    selectedDate: 'Fecha seleccionada: ${date}',
    selectedRangeOfDates: 'Rango de fechas seleccionado: desde ${from} a ${to}',
    selectedOnlyFrom: 'Rango de fechas seleccionado: desde ${from}',
  },
}
