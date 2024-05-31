<script setup lang="ts">

</script>

<template>
  <div class="pt-4 flex flex-col gap-6 lg:flex-row">
    <!-- Headline -->
    <div class="w-full lg:w3/5">
      <HomeFeaturedArticle />
    </div>

    <!-- Popular Article -->
    <div class="w-full lg:w-2/5">
      <LazyHomePopularArticle />
    </div>
  </div>
</template>
