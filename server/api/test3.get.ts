import { Buffer } from 'node:buffer'
import { BetaAnalyticsDataClient } from '@google-analytics/data'
import deleteUrl from '~/utils/deleteUrl'

async function googleApiRequest(analyticsDataClient: BetaAnalyticsDataClient, propertyId: string, limit: string, writerType: string): Promise<string[][]> {
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

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const propertyId = config.googlePropertyId
  const applicationCredentials = config.googleApplicationCredentials

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

  let arrValuesJournalist = []
  let arrValuesCC = []

  const analyticsJournalistData = googleApiRequest(analyticsDataClient, propertyId, '15', 'Journalist')
  const analyticsCCData = googleApiRequest(analyticsDataClient, propertyId, '15', 'Content Creator')

  const [analyticsJournalist, analyticsCC] = await Promise.all([analyticsJournalistData, analyticsCCData])

  arrValuesJournalist = analyticsJournalist.filter(item => deleteUrl(item[0]))
  arrValuesCC = analyticsCC.filter(item => deleteUrl(item[0]))

  const mergedArray = arrValuesJournalist.slice(0, 5).concat(arrValuesCC.slice(0, 2))
  const sortArray = mergedArray.sort((a: any, b: any) => b[1] - a[1])

  const urlArray: any = []
  sortArray.map((subarray: any) => urlArray.push(subarray[0]))

  return urlArray
})
