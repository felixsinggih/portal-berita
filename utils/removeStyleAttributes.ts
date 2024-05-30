import { JSDOM } from 'jsdom'

export default function removeStyleAttributes(html: string): string {
  const dom = new JSDOM(html)
  const doc = dom.window.document

  const figureElements = doc.querySelectorAll('figure')
  const imgElements = doc.querySelectorAll('img')

  figureElements.forEach((figureElement: any) => {
    figureElement.removeAttribute('style')
  })

  imgElements.forEach((imgElement: any) => {
    imgElement.removeAttribute('style')
  })

  return doc.body.innerHTML
}
