export function buildHelpText(
  helpText: string | undefined,
  errors: string[] | undefined,
): string[] {
  if (Boolean(errors?.length)) {
    return errors || []
  }
  if (helpText) {
    return [helpText]
  }
  return []
}
