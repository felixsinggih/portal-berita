<template>
  <div class="space-y-6">
    <!-- Author Card -->
    <div class="w-full py-10 px-6 space-y-2 text-center bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-center">
        <img
          src="/favicon-serayunews.jpg"
          width="140"
          height="140"
          alt="author image"
          class="rounded animate-pulse"
        >
      </div>

      <div class="flex justify-center animate-pulse">
        <div class="rounded w-1/4 h-8 bg-gray-300 dark:bg-gray-600" />
      </div>

      <!-- Social Media -->
      <div class="flex items-center justify-center text-gray-600 dark:text-gray-200 space-x-2 animate-pulse">
        <!-- Facebook -->
        <div>
          <Icon name="bi:facebook" />
        </div>

        <!-- Instagram -->
        <div>
          <Icon name="bi:instagram" />
        </div>

        <!-- Youtube -->
        <div>
          <Icon name="bi:youtube" />
        </div>

        <!-- Twitter -->
        <div>
          <Icon name="bi:twitter-x" />
        </div>

        <!-- Linkedin -->
        <div>
          <Icon name="bi:linkedin" />
        </div>
      </div>
    </div>
  </div>
</template>
