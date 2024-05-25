<script setup lang="ts">
defineProps({
  name: String,
})

const open = ref(false)
</script>

<template>
  <div>
    <div @click="open = !open">
      <label class="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent border-b border-gray-200 dark:border-gray-800 lg:border-0 cursor-pointer">
        {{ name }}
        <Icon name="bi:chevron-down" class="size-4 ml-1" />
      </label>
    </div>
    <!-- <div class="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-slate-950 p-1 text-gray-200 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"> -->
    <div :class="{ block: open, hidden: !open }" class="absolute z-50 lg:mt-2 min-w-[8rem] overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-slate-950 p-1 dark:text-gray-200 shadow-md">
      <!-- <div class="grid grid-cols-2">
        <div class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <a href="/test">test</a>
        </div>
      </div> -->
      <slot />
    </div>
  </div>
</template>
