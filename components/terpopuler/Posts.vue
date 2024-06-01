<script setup lang="ts">
import googleApiRequest from '~/services/google/googleApiRequest'
import { getPostsByslugIn } from '~/services/wpgraphql/getPostsByslugIn'

let arrValuesJournalist = []
let arrValuesCC = []

const analyticsJournalistData = googleApiRequest('15', 'Journalist')
const analyticsCCData = googleApiRequest('15', 'Content Creator')

const [analyticsJournalist, analyticsCC] = await Promise.all([analyticsJournalistData, analyticsCCData])

arrValuesJournalist = analyticsJournalist.filter(item => deleteUrl(item[0]))
arrValuesCC = analyticsCC.filter(item => deleteUrl(item[0]))

const mergedArray = arrValuesJournalist.slice(0, 10).concat(arrValuesCC.slice(0, 10))
const sortArray = mergedArray.sort((a, b) => b[1] - a[1])

const urlArray: any = []
sortArray.map((subarray: any) => urlArray.push(subarray[0]))

const { data } = await getPostsByslugIn(JSON.stringify(urlArray).replaceAll('/', ''), 20)
const res = (await data.value) as Posts
</script>

<template>
  <div>
    <div class="grid lg:grid-cols-2 gap-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
