<script setup lang="ts">

</script>

<template>
  <div class="pt-8 flex flex-col gap-6 lg:flex-row">
    <div class="w-full lg:w-3/5">
      <LazyHomeLatestArticle3 />
    </div>
    <div class="w-full lg:w-2/5 space-y-6">
      <!-- Ad Sidebar 1 -->
      <LazyHomeAdSidebar3 />

      <!-- Sports Article -->
      <LazyHomeSportsArticle />

      <!-- Lifestyle Article -->
      <LazyHomeLifestyleArticle />
    </div>
  </div>
</template>
