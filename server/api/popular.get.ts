import googleApiRequest from '~/server/google/googleApiRequest'
import deleteUrl from '~/utils/deleteUrl'

export default defineEventHandler(async () => {
  let arrValuesJournalist = []
  let arrValuesCC = []

  const analyticsJournalistData = googleApiRequest('15', 'Journalist')
  const analyticsCCData = googleApiRequest('15', 'Content Creator')

  const [analyticsJournalist, analyticsCC] = await Promise.all([analyticsJournalistData, analyticsCCData])

  arrValuesJournalist = analyticsJournalist.filter(item => deleteUrl(item[0]))
  arrValuesCC = analyticsCC.filter(item => deleteUrl(item[0]))

  const mergedArray = arrValuesJournalist.slice(0, 5).concat(arrValuesCC.slice(0, 2))
  const sortArray = mergedArray.sort((a, b) => b[1] - a[1])

  const urlArray: any = []
  sortArray.map((subarray: any) => urlArray.push(subarray[0]))

  return urlArray
})
