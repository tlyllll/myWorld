<template>
  <div>
    <SocialMedia></SocialMedia>
    <WebContent>
      <div class="introduce">
        <div class="img-content">
          <svg class="svg-shape">
            <image href="@/assets/img/favicon.svg" height="100%" width="100%"/>
          </svg>
        </div>
        <div class="text-content">
          <h1>Hi! It's 1Ting</h1>
          <h3>Welcome to my world. I'm a front-end developer. This is my personal web page, created to showcase myself and my work.</h3>
          <h3>Hope you like here. </h3>
          <h3>Feel free to contact me if you have any questions or would like to discuss potential projects.</h3>
          <h3>Have a nice day!</h3>
        </div>
      </div>
      <div class="follow-content">
        <button>
          <svg class="idea">
              <image href="@/assets/img/icons8-idea.svg" height="100%" width="100%"/>
            </svg>
          Follow me
        </button>
        <div class="social-content-colum">
          <Bubble :inner-text="`@Lyt_only`" :width-is="`100`" :class-name="`bubble-bottom`">
            <svg class="sns-icon">
              <image href="@/assets/img/icons8-wechat.svg" height="100%" width="100%"/>
            </svg>
          </Bubble>
          <Bubble :inner-text="`tlyllll`" :width-is="`100`" :class-name="`bubble-bottom`">
            <svg class="sns-icon">
              <image href="@/assets/img/icons8-github.svg" height="100%" width="100%"/>
            </svg>
          </Bubble>
          <Bubble :inner-text="`l1ttt`" :width-is="`100`" :class-name="`bubble-bottom`">
            <svg class="sns-icon">
              <image href="@/assets/img/icons8-instagram-old.svg" height="100%" width="100%"/>
            </svg>
          </Bubble>
          <Bubble :inner-text="`linyiting0401@163.com`" :width-is="`200`" :class-name="`bubble-bottom`">
            <svg class="sns-icon">
              <image href="@/assets/img/icons8-email.svg" height="100%" width="100%"/>
            </svg>
          </Bubble>
          
        </div>
      </div>
    </WebContent>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "@/components/carousel.vue";
import WebContent from "@/components/webContent.vue";
import '@/assets/css/global.css'
import Bubble from "@/components/bubble.vue";
import SocialMedia from "@/components/socialMedia.vue";

interface Img {
    imgUrl: string,
    toPath: string
}
export default defineComponent({
  components: {
    Carousel,
    WebContent,
    Bubble,
    SocialMedia
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
.introduce {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px 10px 5px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
.img-content {
  display: flex;
  flex-direction: column;

}
.svg-shape {
  height: 30vw
}
.text-content {
  min-width: 300px;
  flex: 1;
  padding: 5px;
  
}
h1 {
  font-family: fantasy;
}
h3 {
  font-family: monospace;
}
.follow-content {
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
}
.sns-icon {
  height: 40px;
  width: 40px;
  margin: 0 4px;
}
.sns-icon:hover {
  cursor: pointer;
}
.bubble-top {
  position: absolute;
}
.social-content-colum {
  display: flex;
}
</style>
  