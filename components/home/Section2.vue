<script setup lang="ts">

</script>

<template>
  <div class="pt-8 flex flex-col gap-6 lg:flex-row">
    <div class="w-full lg:w-3/5">
      <!-- Latest Article 1 -->
      <LazyHomeLatestArticle1 />
    </div>
    <div class="w-full lg:w-2/5 space-y-6">
      <!-- Seputar Pemilu 2024 -->
      <a href="/seputar-pemilu-2024">
        <NuxtImg
          width="523"
          height="270"
          src="https://serayunews.pw/wp-content/uploads/2023/11/seputar-pemilu-2024-jpeg.webp" alt="Seputar Pemilu 2024"
          class="rounded w-full h-auto"
        />
      </a>

      <!-- Ad Sidebar 1 -->
      <LazyHomeAdSidebar1 />

      <!-- Ad Sidebar 2 -->
      <LazyHomeAdSidebar2 />

      <!-- Mitos Article -->
      <LazyHomeMitosArticle />
    </div>
  </div>
</template>
