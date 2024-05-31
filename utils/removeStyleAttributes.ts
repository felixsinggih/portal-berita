import cheerio from 'cheerio'

export default function removeStyleAttributes(html: any) {
  const $ = cheerio.load(html)

  $('figure, img').removeAttr('style')

  return $.html()
}
