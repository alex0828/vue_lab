export function filterArraySearch (pattern, data) {
  const rule = new RegExp(`${pattern}`, 'g')
  const value = data
  const out = value.filter((elem, index) => rule.test(elem))
  return out
}
