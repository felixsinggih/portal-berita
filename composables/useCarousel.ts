// composables/useCarousel.ts
import { onMounted, onUnmounted, ref, watch } from 'vue'

export function useCarousel(images: string[]) {
  const currentIndex = ref(0)

  const nextSlide = () => {
    currentIndex.value = currentIndex.value === images.length - 1 ? 0 : currentIndex.value + 1
  }

  const prevSlide = () => {
    currentIndex.value = currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1
  }

  let interval: ReturnType<typeof setInterval>
  onMounted(() => {
    interval = setInterval(() => {
      nextSlide()
    }, 3000)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })

  watch(currentIndex, () => {
    clearInterval(interval)
    interval = setInterval(() => {
      nextSlide()
    }, 3000)
  })

  return { currentIndex, nextSlide, prevSlide }
}
