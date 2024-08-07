import type { Row } from '../atoms/CardsTableList'
import { Order } from '../atoms/CardsTableList'

interface Parse {
  (x: string): string
}

export interface Sort {
  rows: Row[]
  prop: string
  order: string
  parse?: Parse
}

export function sortBy({
  rows,
  prop,
  order = Order.Ascending,
  parse = (x) => x,
}: Sort) {
  const sortOrder = order === Order.Descending ? -1 : 1
  return rows.sort((a: Row, b: Row) => {
    let result = 0
    if (parse(a.columns[prop]) < parse(b.columns[prop])) {
      result = -1
    }
    if (parse(a.columns[prop]) > parse(b.columns[prop])) {
      result = 1
    }
    return result * sortOrder
  })
}
