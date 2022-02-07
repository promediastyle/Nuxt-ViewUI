<template>
  <header class="py-4 bg-gray-100 mb-10">

    <nav class="container flex justify-between items-center font-bold">
      <div>
        <NuxtLink :to="localePath('/')">{{ $t('header.LangSwitcher.language') }}</NuxtLink>
      </div>
      <div>
        <NuxtLink active-class="activeLangSwitcher" :to="switchLocalePath('ru')" exact>RU</NuxtLink>
        <NuxtLink active-class="activeLangSwitcher" :to="switchLocalePath('ua')">UA</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style>
  .activeLangSwitcher {
    @apply text-indigo-600;
  }
</style>