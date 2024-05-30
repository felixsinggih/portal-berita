<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <div class="bg-gray-200 dark:bg-slate-950 py-6">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="w-full">
        <div class="grid w-full justify-between sm:flex sm:grid-cols-2">
          <div class="mb-2 lg:mb-0">
            <img src="/logo-sn.png" width="134.3" height="32" class="h-8 w-auto" alt="Serayu News Logo">
          </div>

          <div class="w-full flex justify-between">
            <div class="hidden sm:block">
              &nbsp;
            </div>
            <div class="justify-start mr-4">
              <ul class="text-gray-800 dark:text-gray-200 font-medium space-y-2">
                <li>
                  <a href="/page/tentang-kami" class="hover:underline ">Tentang Kami</a>
                </li>
                <li>
                  <a href="/page/susunan-redaksi" class="hover:underline">Susunan Redaksi</a>
                </li>
                <li>
                  <a href="/page/hubungi-kami" class="hover:underline">Hubungi Kami</a>
                </li>
                <li>
                  <a href="/page/kode-etik-jurnalistik" class="hover:underline">Kode Etik Jurnaslistik</a>
                </li>
              </ul>
            </div>
            <div class="justify-end">
              <ul class="text-gray-800 dark:text-gray-200 font-medium space-y-2">
                <li>
                  <a href="/page/pedoman-pemberitaan-media-siber" class="hover:underline ">
                    Pedoman Pemberitaan Media Siber
                  </a>
                </li>
                <li>
                  <a href="/page/disclaimer" class="hover:underline">Syarat dan Ketentuan</a>
                </li>
                <li>
                  <a href="/page/kebijakan-privasi" class="hover:underline">Kebijakan Privasi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8">

      <div class="w-full sm:flex sm:items-center sm:justify-between">
        <div class="flex items-center space-x-3">
          <div class="text-sm text-gray-600 sm:text-center dark:text-gray-300">
            <a href="/" class="hover:underline">{{ config.public.siteName }}</a>
          </div>

          <div class="text-sm text-gray-600 sm:text-center dark:text-gray-300">
            <a href="https://zonaviral.com" class="hover:underline">Zona Viral</a>
          </div>

          <div class="text-sm text-gray-600 sm:text-center dark:text-gray-300">
            <a href="https://skincarepedia.com" class="hover:underline">Skincarepedia</a>
          </div>
        </div>

        <div class="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
          <a :href="config.public.urlFacebook" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <Icon name="bi:facebook" class="w-5 h-5" />
            <span class="sr-only">Facebook page</span>
          </a>
          <a :href="config.public.urlInstagram" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <Icon name="bi:instagram" class="w-5 h-5" />
            <span class="sr-only">Instagram account</span>
          </a>
          <a :href="config.public.urlTwitter" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <Icon name="bi:twitter-x" class="w-5 h-5" />
            <span class="sr-only">Titter account</span>
          </a>
          <a :href="config.public.urlYoutube" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <Icon name="bi:youtube" class="w-5 h-5" />
            <span class="sr-only">Youtube account</span>
          </a>
          <a :href="config.public.urlTiktok" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <Icon name="bi:tiktok" class="w-5 h-5" />
            <span class="sr-only">Tiktok account</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
