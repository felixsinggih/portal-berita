<script setup lang="ts">
import { getLatestPosts } from '~/services/wpgraphql/getLatestPosts'
</script>

<template>
  <div>
    <CategoryHeader
      title="Terkini"
    />

    <TerkiniPosts />
  </div>
</template>
