<script setup lang="ts">
import categoryPostsBySlugQuery from '~/services/wpgraphql/queries/categoryPostsBySlugQuery'

const props = defineProps({
  slug: String,
})

const config = useRuntimeConfig()

const query = categoryPostsBySlugQuery(props.slug as string, Number(config.public.postsLimit))
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
})
const res = data.value as Posts
</script>

<template>
  <div class="space-y-6">
    <div class="grid lg:grid-cols-2 gap-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>

    <LazyCategoryLoadMore
      :slug="(slug as string)"
      :info="res.data.posts.pageInfo"
    />
  </div>
</template>
