<script setup lang="ts">
const props = defineProps<{ posts: Posts }>()

const config = useRuntimeConfig()

const { currentIndex, nextSlide, prevSlide } = useCarousel(props.posts.data.posts.nodes.length)
</script>

<template>
  <div class="overflow-hidden relative">
    <div class="carousel">
      <div class="carousel-inner flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(post, index) in posts.data.posts.nodes" :key="index" class="w-full flex-shrink-0">
          <div class="relative">
            <NuxtImg
              :src="post.featuredImage ? post.featuredImage.node.sourceUrl : config.public.siteThumbnailUrl"
              width="740"
              height="512"
              :alt="post.featuredImage.node.altText"
              class="w-full h-80 sm:h-96 md:h-[30rem] lg:h-[34rem] xl:h-[32rem] object-cover rounded-md"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent flex items-end p-6 text-gray-200 rounded-md">
              <div class="space-y-3">
                <a
                  :href="`/${post.slug}`"
                  class="text-base sm:text-lg md:text-2xl font-bold hover:underline transition-all relative overflow-hidden inline-block"
                  v-html="post.title"
                />
                <div class="flex items-center space-x-3">
                  <NuxtImg
                    :src="post.author.node.avatar.url"
                    width="24"
                    height="24"
                    :alt="post.author.node.name"
                    class="rounded-full"
                  />
                  <a :href="`/author/${post.author.node.slug}`" class="text-sm sm:text-base hover:underline">
                    {{ post.author.node.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- </div> -->
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
