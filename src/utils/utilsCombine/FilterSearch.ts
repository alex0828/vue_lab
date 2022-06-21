export function filterSearch (inputText:string, data:Array<string>) {
    const result = data.filter((item) => item.toLowerCase().includes(inputText.toLowerCase()))
    return result
  }
  