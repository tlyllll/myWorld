<template>
    <div class="bubble" @mouseover="mouseEnter" @mouseout="mouseOut">
        <slot></slot>
        <div 
        v-show="isActive" 
        :style="{ 'width': widthIs+'px', 'left': -leftDis+'px' }"
        class="bubble-top"
        >{{ innerText }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, PropType, ref } from 'vue'
export default defineComponent({
    props: {
        innerText: String,
        widthIs: {
            type:String,
            default:``,
        },
    },
    setup (props) {
        let isActive = ref(false)
        const mouseEnter = () => {
            isActive.value = true
        }
        const mouseOut = () => {
            isActive.value = false
        }
        const widthIs = parseInt(props.widthIs) || 200
        const leftDis = (widthIs+24)/2 - 24
        console.log(widthIs,leftDis)
        
        return {
            ...props,
            mouseEnter,
            mouseOut,
            isActive,
            leftDis,
            widthIs
        }
    }
})
</script>

<style lang="scss" scoped>
.bubble {
    position: relative;
}
.bubble-top {
  /* Modify size here: */
  --size: 100px;

  position: absolute;
//   width: var(--size);
    padding: 0 10px;
  height: calc(var(--size) * 0.44);
  background: #b0e1ff;
  border-radius: 10px;
  border: 2px solid #0f36ae;
  float: left;
//   left: -50%;
  top: 100%;
  text-align: center;
  line-height: calc(var(--size) * 0.44);
  font-weight: 400;
  color: #0f36ae;
  font-family: monospace;
  translate: 0.2s;
}

.bubble-top:after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: calc(var(--size) * 0.13) solid transparent;
  border-bottom-color: #0f36ae;
  border-top: 0;
  margin-left: calc(var(--size) * 0.13 * -1);
  margin-top: calc(var(--size) * 0.13 * -1);
}
</style>