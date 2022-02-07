<template>
  <main class="container space-y-[40px] py-[40px]">

    <div class="border-b">
      <h2 class="h2">Modal</h2>
      <div class="py-[40px]">
        <AppModal/>
      </div>
    </div>

    <div class="border-b">
      <h2 class="h2">Carousel</h2>
      <div class="py-[40px]">
        <AppCarousel/>
      </div>
    </div>

  </main>
</template>

<style>
  .h2 {
    @apply text-2xl font-bold;
  }
</style>