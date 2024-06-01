/* eslint-disable node/prefer-global/buffer */
/* eslint-disable node/prefer-global/process */
import { BetaAnalyticsDataClient } from '@google-analytics/data'
import deleteUrl from '~/utils/deleteUrl'

export default defineEventHandler(async () => {
  const propertyId = process.env.GOOGLE_PROPERTY_ID
  const applicationCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS

  const credential = JSON.parse(
    Buffer.from(`${applicationCredentials}`, 'base64').toString(),
  )

  const analyticsDataClient = new BetaAnalyticsDataClient({
    projectId: credential.projectId,
    credentials: {
      client_email: credential.client_email,
      private_key: credential.private_key,
    },
  })

  const googleApiRequest = async (limit: string, writerType: string) => {
    const arrValues: any[] = []

    const response = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dimensions: [{
        name: 'pagePath',
      }],
      metrics: [{
        name: 'screenPageViews',
      }],
      dateRanges: [{
        startDate: '2daysAgo',
        endDate: 'today',
      }],
      dimensionFilter: {
        filter: {
          fieldName: 'customEvent:writerType',
          stringFilter: {
            matchType: 'EXACT',
            value: writerType,
          },
        },
      },
      limit,
      returnPropertyQuota: true,
    })

    response[0].rows?.map(row => arrValues.push((row.dimensionValues && row.metricValues) && [row.dimensionValues[0].value, row.metricValues[0].value]))
    return arrValues
  }

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
