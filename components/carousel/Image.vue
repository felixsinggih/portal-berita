<script setup lang="ts">
const props = defineProps<{ page: Page }>()

const images = props.page.data.page.content.replace('<p>', '').replace('</p>', '').split(',')

const { currentIndex, nextSlide, prevSlide } = useCarousel(images.length)
</script>

<template>
  <div class="overflow-hidden relative">
    <div class="carousel">
      <div class="carousel-inner flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
          <img :src="image.trim()" :width="518" :height="776" :alt="`Ads ${index}`" class="w-full h-auto rounded">
        </div>
      </div>

      <!-- Previous -->
      <button
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-400/40 hover:bg-gray-800 text-white p-2 rounded-full"
        @click="prevSlide"
      >
        <Icon name="bi:chevron-left" class="size-5" />
        <span class="sr-only">Sebelumnya</span>
      </button>

      <!-- Next -->
      <button
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-400/40 hover:bg-gray-800 text-white p-2 rounded-full"
        @click="nextSlide"
      >
        <Icon name="bi:chevron-right" class="size-5" />
        <span class="sr-only">Berikutnya</span>
      </button>
    </div>
  </div>
</template>
