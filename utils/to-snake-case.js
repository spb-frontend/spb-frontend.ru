export function toSnakeCase(text) {
  const lower = text.toLowerCase()
  const snake = lower.replace(/\s/g, '_')

  return snake
}
