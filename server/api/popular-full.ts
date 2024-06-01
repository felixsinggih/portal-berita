import { createRouter, defineEventHandler, useBase } from 'h3'
import googleApiRequest from '~/services/google/googleApiRequest'
import deleteUrl from '~/utils/deleteUrl'

const router = createRouter()

router.get('/api/popular-full', async () => {
  let arrValuesJournalist = []
  let arrValuesCC = []

  const analyticsJournalistData = googleApiRequest('15', 'Journalist')
  const analyticsCCData = googleApiRequest('15', 'Content Creator')

  const [analyticsJournalist, analyticsCC] = await Promise.all([analyticsJournalistData, analyticsCCData])

  arrValuesJournalist = analyticsJournalist.filter(item => deleteUrl(item[0]))
  arrValuesCC = analyticsCC.filter(item => deleteUrl(item[0]))

  const mergedArray = arrValuesJournalist.slice(0, 10).concat(arrValuesCC.slice(0, 10))
  const sortArray = mergedArray.sort((a, b) => b[1] - a[1])

  const urls: any = []
  sortArray.map((subarray: any) => urls.push(subarray[0]))

  return urls
})

export default defineEventHandler(router)
