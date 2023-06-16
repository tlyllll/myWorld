<template>
    <div class="info-content" v-show="isShow">
        <div class="v-negative">
            <svg class="negative-icon" @click="cancel">
              <image href="@/assets/img/icons8-cancel.svg" height="100%" width="100%"/>
            </svg>
            <svg class="negative-icon">
              <image href="@/assets/img/icons8-info.svg" height="100%" width="100%"/>
            </svg>
        </div>
        <Bubble :inner-text="`linyiting0401@163.com`" :width-is="`200`" :class-name="`bubble-right`">
            <svg class="media-icon">
              <image href="@/assets/img/icons8-email-simple.svg" height="100%" width="100%"/>
            </svg>
        </Bubble>
        <Bubble :inner-text="`tlyllll`" :width-is="`100`" :class-name="`bubble-right`">
            <svg class="media-icon">
              <image href="@/assets/img/icons8-github-simple.svg" height="100%" width="100%"/>
            </svg>
        </Bubble>
        <Bubble :inner-text="`l1ttt`" :width-is="`100`" :class-name="`bubble-right`">
            <svg class="media-icon">
              <image href="@/assets/img/icons8-instagram-simple.svg" height="100%" width="100%"/>
            </svg>
        </Bubble>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, PropType, ref } from 'vue'
import Bubble from './bubble.vue'
export default defineComponent({
    setup(props) {
        const isShow = ref(true);
        const cancel = () => isShow.value = !isShow.value;
        return {
            isShow,
            cancel
        };
    },
    components: { Bubble }
})
</script>

<style lang="scss" scoped>
.info-content {
    border: 3px solid #0f36ae;
    width: 64px;
    min-height: 200px;
    position: fixed;
    right: 0;
    top: 20vh;
    z-index: 1;
    transition: 0.6s;
}
.v-negative {
    height: 16px;
    border-bottom: 3px solid #0f36ae;
    display: flex;
    flex-direction: row;
    padding: 0 5px;
}
.negative-box {
    border: 4px solid #0f36ae;
    height: 8px;
    width: 8px;
    display: inline-block;
    margin: auto 3px;
}
.negative-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
}
.media-icon {
    width: 64px;
    height: 64px;
}

@media only screen and (max-width: 768px){
    .info-content {
        right: -100%;
    }
}
</style>