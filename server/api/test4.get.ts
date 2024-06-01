import googleService from '~/server/google/googleService'
import deleteUrl from '~/utils/deleteUrl'

export default defineEventHandler(async () => {
  let arrValuesJournalist = []
  let arrValuesCC = []

  const analyticsJournalistData = googleService('15', 'Journalist')
  const analyticsCCData = googleService('15', 'Content Creator')

  const [analyticsJournalist, analyticsCC] = await Promise.all([analyticsJournalistData, analyticsCCData])

  arrValuesJournalist = analyticsJournalist.filter(item => deleteUrl(item[0]))
  arrValuesCC = analyticsCC.filter(item => deleteUrl(item[0]))

  const mergedArray = arrValuesJournalist.slice(0, 5).concat(arrValuesCC.slice(0, 2))
  const sortArray = mergedArray.sort((a, b) => b[1] - a[1])

  const urlArray: any = []
  sortArray.map((subarray: any) => urlArray.push(subarray[0]))

  return urlArray
})
