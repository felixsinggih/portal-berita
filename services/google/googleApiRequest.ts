/* eslint-disable node/prefer-global/buffer */
/* eslint-disable node/prefer-global/process */
import { BetaAnalyticsDataClient } from '@google-analytics/data'

const propertyId = process.env.GOOGLE_PROPERTY_ID
const applicationCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS

const credential = JSON.parse(
  Buffer.from(`${applicationCredentials}`, 'base64').toString()
)

const analyticsDataClient = new BetaAnalyticsDataClient({
  projectId: credential.projectId,
  credentials: {
    client_email: credential.client_email,
    private_key: credential.private_key,
  },
})

export default async function googleApiRequest(limit: string, writerType: string) {
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
