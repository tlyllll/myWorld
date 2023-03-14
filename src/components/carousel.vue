<template>
    <div class="carousel" @mouseleave="start" @mouseenter="stop">
        <!-- 图片部分 -->
        <ul class="carousel-content">
            <li
                class="carousel-item"
                v-for="(item,index) in sliders"
                :key="index"
                :class="{ fade: cur === index }"
            >
                <RouterLink :to="{path:item.toPath}">
                    <img :src="item.imgUrl" alt=""/>
                </RouterLink>
            </li>
        </ul>
        <div class="carousel-btn prev" @click="hleft">
            <span class="iconfont icon-left"></span>
        </div>
        <div class="carousel-btn next" @click="hright">
            <span class="iconfont icon-right"></span>
        </div>
        <div class="carousel-indicator">
          <span
            @click="cur=i"
            v-for="(item, i) in sliders"
            :key="i"
            :class="{ active: cur === i }"
          ></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, PropType, ref } from 'vue'

interface imgProps {
    imgUrl: string,
    toPath: string
}
export default defineComponent({
    props: {
        sliders: Array as unknown as PropType<imgProps[]>,
        autoplay: Boolean,
        duration: Number
    },
    setup (props) {
        const sliders = props.sliders
        const cur = ref(0)
        let timer = -1
        const hleft = () => {
            cur.value = (cur.value+sliders!.length-1)%sliders!.length
        }
        const hright = () => {
            cur.value = (cur.value+sliders!.length+1)%sliders!.length
        }
        const start = () => {
            if(props.autoplay) {
                timer = window.setInterval(() => {
                    hright()
                }, props.duration)
            }
        }
        const stop = () => {
            clearInterval(timer)
        }

        onMounted(() => {
            start()
        })
        onBeforeMount(() => {
            stop()
        })
        return {
            sliders,
            cur,
            start,
            stop,
            hright,
            hleft
        }
    }
})
</script>

<style scoped lang="scss">
.carousel {
    width: 80vw;
    height: 42vw;
    min-width: 330px;
    min-height: 180px;
    position: relative;
    margin: 30px auto;
    border: 15px solid #f3e3e3;
    border-radius: 10px;
    box-shadow: 2px 5px 12px #0000008a;
}
.carousel-content {
    width: 100%;
    height: 100%;
}
.carousel-item {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 0.5s linear;
    overflow: hidden;
}
.fade {
    opacity: 1;
    z-index: 1;
}
img {
    width: 100%;
    height: 100%;
}
.carousel-indicator {
    position: absolute;
    left: 0;
    bottom: 10px;
    z-index: 2;
    width: 100%;
    text-align: center;

    span {
        display: inline-block;
        width: 20px;
        height: 3px;
        background: #ffffff45;
        border-radius: 2px;
        cursor: pointer;
        ~ span {
            margin-left: 12px;
        } 
        &.active {
          background: #ffffffb8;
        }
    }
}
.carousel-btn {
    width: 44px;
    height: 44px;
    // background: rgb(255, 255, 255);
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    z-index: 3;
    text-align: center;
    line-height: 44px;
    opacity: 0;
    transition: all 0.5s;
    &:hover {
        opacity: 1;
    }
}
.prev {
    left: 0;
}
.next {
    right: 0;
}
.iconfont {
    font-size: 3vw;
}
</style>