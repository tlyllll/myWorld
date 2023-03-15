<template>
  <div>
    <Carousel 
    style="margin-top: 16vh;" 
    :sliders="imgList"
    :autoplay="autoplay"
    :duration="duration"></Carousel>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "@/components/carousel.vue";

interface Img {
    imgUrl: string,
    toPath: string
}
export default defineComponent({
  components: {
    Carousel
  },
    setup() {
      const baseImgUrl = '/src/assets/img/'
      const imgList: Array<Img> = [
        {
          imgUrl: baseImgUrl+'0652.jpg',
          toPath: '/login'
        },
        {
          imgUrl: baseImgUrl+'IMG_0513.jpg',
          toPath: ''
        },
        {
          imgUrl: baseImgUrl+'IMG_1274.jpg',
          toPath: ''
        },
        {
          imgUrl: baseImgUrl+'IMG_6307.jpeg',
          toPath: ''
        },
        {
          imgUrl: baseImgUrl+'IMG_9261.jpg',
          toPath: ''
        },
      ]
      const autoplay = true
      const duration = 3000
      return {
        imgList,
        autoplay,
        duration
      }
    }
  })
</script>
<style scoped>

</style>
  