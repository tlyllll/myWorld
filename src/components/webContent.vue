<template>
    <div class="web-content">
        <div class="v-negative">
            <span class="negative-box" style="background-color: #FFC6CD;"></span>
            <span class="negative-box" style="background-color: #FDEBAD;"></span>
            <span class="negative-box" style="background-color: #B6E4B4;"></span>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, PropType, ref } from 'vue'
export default defineComponent({
})
</script>

<style lang="scss" scoped>
.web-content {
    background-color: #fff;
    border: 4px solid #0f36ae;
    width: 70vw;
    min-width: 330px;
    min-height: 180px;
    position: relative;
    margin: 145px auto 30px;
    z-index: 0;
}
.v-negative {
    height: 20px;
    border-bottom: 4px solid #0f36ae;
    background-color: #b0e1ff;
    display: flex;
    flex-direction: row-reverse;
    padding: 0 5px;
}
.negative-box {
    border: 4px solid #0f36ae;
    height: 8px;
    width: 8px;
    display: inline-block;
    margin: auto 3px;
}
.web-content::after {
    content: "";
    height: 100%;
    width: 100%;
    border: 4px solid #0f36ae;
    transform: translate(-15px, 8px);
    position: absolute;
    top: 0;
    z-index: -1;
}
</style>