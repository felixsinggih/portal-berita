export function dateFormatter(dateStr: string) {
  const date = new Date(dateStr)
  const differenceInMilliseconds = Date.now() - date.getTime()
  const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60))
  const differenceInHours = Math.floor(differenceInMinutes / 60)
  const differenceInDays = Math.floor(differenceInHours / 24)

  if (differenceInMinutes < 1)
    return 'sekitar 1 menit yang lalu'
  else if (differenceInMinutes < 60)
    return `sekitar ${differenceInMinutes} menit yang lalu`
  else if (differenceInHours < 24)
    return `sekitar ${differenceInHours} jam yang lalu`
  else if (differenceInDays <= 7)
    return `sekitar ${differenceInDays} hari yang lalu`
  else return dateTimeFormatter(dateStr)
}

export function dateTimeFormatter(dateStr: string) {
  const date = new Date(dateStr)

  const format = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  return format.format(date)
}
