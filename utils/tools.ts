export function addCss(cssText: string) {
  const styleEle = document.createElement("style")
  const cssTextNode = document.createTextNode(cssText)
  styleEle.appendChild(cssTextNode)
  document.head.appendChild(styleEle)
}
