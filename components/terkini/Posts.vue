<script setup lang="ts">
import { getLatestPosts } from '~/services/wpgraphql/getLatestPosts'
import latestPostsQuery from '~/services/wpgraphql/queries/latestPostsQuery'

const config = useRuntimeConfig()

// const { data } = await getLatestPosts(Number(config.public.postsLimit))
// const res = (await data.value) as Posts
const query = latestPostsQuery(Number(config.public.postsLimit))
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
})
const res = data.value as Posts
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

    <LazyTerkiniLoadMore :info="res.data.posts.pageInfo" />
  </div>
</template>
