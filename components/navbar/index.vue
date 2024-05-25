<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <nav class="bg-white dark:bg-slate-950 sticky w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3">
        <img
          src="/logo-sn.png"
          width="168"
          height="40"
          class="h-9 w-auto sm:h-10"
          alt="Serayu News Logo"
        >
      </a>
      <div class="flex lg:order-2">
        <!-- <ThemeSwitcher /> -->

        <a href="/search" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-600 dark:hover:text-white">
          <Icon name="bi:search" class="size-[1.2rem]" />
          <span class="sr-only">Pencarian</span>
        </a>

        <button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-600 dark:hover:text-white lg:hidden" @click="open = !open">
          <Icon name="tabler:menu-2" class="size-[2.5rem]" />
          <span class="sr-only">Open main menu</span>
        </button>
      </div>
      <div :class="{ block: open, hidden: !open }" class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
        <ul class="flex flex-col lg:p-0 mt-4 font-medium lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-slate-950 dark:border-gray-700">
          <!-- Home -->
          <li class="lg:hidden xl:block">
            <NavbarLink to="/">
              Home
            </NavbarLink>
          </li>

          <!-- Berita Ngapak -->
          <li>
            <NavbarDropDown name="Berita Ngapak">
              <div class="grid grid-cols-2">
                <NavbarDropDownLink to="/category/cilacap">
                  Cilacap
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/banyumas">
                  Banyumas
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/purbalingga">
                  Purbalingga
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/banjarnegara">
                  Banjarnegara
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/kebumen">
                  Kebumen
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/wonosobo">
                  Wonosobo
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/tegal">
                  Tegal
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/pekalongan">
                  Pekalongan
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/pemalang">
                  Pemalang
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/brebes">
                  Brebes
                </NavbarDropDownLink>
              </div>
            </NavbarDropDown>
          </li>

          <!-- Ngapak Diaspora -->
          <li>
            <NavbarLink to="/category/ngapak-diaspora">
              Ngapak Diaspora
            </NavbarLink>
          </li>

          <!-- Nasional -->
          <li class="lg:hidden xl:block">
            <NavbarLink to="/category/nasional">
              Nasional
            </NavbarLink>
          </li>

          <!-- Lifestyle -->
          <li>
            <NavbarLink to="/category/lifestyle">
              Gaya Urip
            </NavbarLink>
          </li>

          <!-- Cek Fakta -->
          <li>
            <NavbarLink to="/category/cek-fakta">
              Cek Fakta
            </NavbarLink>
          </li>

          <!-- Lainnya -->
          <li>
            <NavbarDropDown name="Lainnya">
              <div class="grid grid-cols-2">
                <NavbarDropDownLink to="/category/nasional" class="hidden lg:block xl:hidden">
                  Nasional
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/sport">
                  Olah Rogo
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/politik">
                  Politik
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/hukumkriminal">
                  Hukum dan Kriminal
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/ekonomi">
                  Ekonomi
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/entertainment">
                  Entertainment
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/edukasi">
                  Pendidikan
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/tekno">
                  Tekno
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/otomotif">
                  Otomotif
                </NavbarDropDownLink>
                <NavbarDropDownLink to="/category/opini">
                  Opini
                </NavbarDropDownLink>
              </div>
            </NavbarDropDown>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
