export function filterArraySearch (pattern:string, data:Array<string>) {
    const rule = new RegExp(`${pattern}`, 'gi')
    const value = data
    const out = value.filter((elem, index) => rule.test(elem))
    console.log(pattern,out)
    return out
  }
  