<template>
  <div class="flex flex-col min-h-screen antialiased bg-white dark:bg-gray-900 font-openSans">
    <Navbar />
    <div class="w-full flex-grow">
      <main class="max-w-screen-xl mx-auto p-4">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>
