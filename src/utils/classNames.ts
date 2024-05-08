type classNameProp = string | { [key: string]: any } | undefined

export const classNames = (...classNames: classNameProp[]): string => {
  const resultClasses: string[] = []

  classNames.forEach((className) => {
    if (className === undefined) {
      return
    }

    if (typeof className === 'string') {
      return resultClasses.push(className)
    }

    Object.keys(className).forEach((key) => {
      if (Boolean(className[key])) {
        resultClasses.push(key)
      }
    })
  })

  return resultClasses.join(' ')
}
