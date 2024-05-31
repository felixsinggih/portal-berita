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

const mergedArray = arrValuesJournalist.slice(0, 5).concat(arrValuesCC.slice(0, 2))
const sortArray = mergedArray.sort((a, b) => b[1] - a[1])

const urlArray: any = []
sortArray.map((subarray: any) => urlArray.push(subarray[0]))

const { data } = await getPostsByslugIn(JSON.stringify(urlArray).replaceAll('/', ''), 7)
const res = (await data.value) as Posts
</script>

<template>
  <div class="space-y-4">
    <Heading>
      <a href="/terpopuler">
        Terpopuler
      </a>
    </Heading>

    <div v-for="(post, i) in res.data.posts.nodes" :key="post.slug" class="flex items-center mb-2">
      <span class="text-2xl text-gray-800 dark:text-gray-200 font-bold italic opacity-70 me-3">#{{ i + 1 }}</span>
      <a :href="`/${post.slug}`" class="font-semibold xl:font-bold text-gray-800 dark:text-gray-200 hover:underline">
        {{ post.title }}
      </a>
    </div>
  </div>
</template>
