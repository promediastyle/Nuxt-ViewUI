<template>
  <Carousel
    v-model="value3"
    :autoplay="setting.autoplay"
    :autoplay-speed="setting.autoplaySpeed"
    :dots="setting.dots"
    :radius-dot="setting.radiusDot"
    :trigger="setting.trigger"
    :arrow="setting.arrow"
    :loop="setting.loop">
    <CarouselItem>
      <div class="demo-carousel">
        {{ $t('сarousel.slider.one') }}
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        {{ $t('сarousel.slider.two') }}
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">Slide 3</div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">Slide 4</div>
    </CarouselItem>
  </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value3: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'hover',
                    arrow: 'hover',
                    loop: true,
                }
            }
        },
    }
</script>

<style scoped>
  .demo-carousel {
    @apply h-[480px] bg-gray-300 flex justify-center items-center;
  }
</style>