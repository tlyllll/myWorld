<template>
    <div class="color-card">
        <span class="color-box" style="background-color: #fed3ff;"></span>
        <span class="color-box" style="background-color: #b0e1ff;"></span>
        <span class="color-box" style="background-color: #e1f8a1;"></span>
        <span class="color-box" style="background-color: #0f36ae;"></span>
        <span class="color-box" style="background-color: #ff6b6b;"></span>
        <span class="color-box" style="background-color: #FFC6CD;"></span>
        <span class="color-box" style="background-color: #FFE5B4;"></span>
        <span class="color-box" style="background-color: #fff954;"></span>
        <span class="color-box" style="background-color: #FCF6BD;"></span>
        <span class="color-box" style="background-color: #b6e4b4;"></span>
        <span class="color-box" style="background-color: #ceffc6;"></span>
        <span class="color-box" style="background-color: #e5ffe4;"></span>
        <span class="color-box" style="background-color: #B8FFFF;"></span>
        <span class="color-box" style="background-color: #A9DEF9;"></span>
        <span class="color-box" style="background-color: #4FB9FF;"></span>
        <span class="color-box" style="background-color: #F72585;"></span>
        <span class="color-box" style="background-color: #FF99C8;"></span>
        <span class="color-box" style="background-color: #e4d3ff;"></span>
        <span class="color-box" style="background-color: #fee7f9;"></span>
        <span class="color-box" style="background-color: #FFADAD;"></span>
        <span class="color-box" style="background-color: #FFD6A5;"></span>
        <span class="color-box" style="background-color: #FDFFB6;"></span>
        <span class="color-box" style="background-color: #CAFFBF;"></span>
        <span class="color-box" style="background-color: #9BF6FF;"></span>
        <span class="color-box" style="background-color: #A0C4FF;"></span>
        <span class="color-box" style="background-color: #BDB2FF;"></span>
        <span class="color-box" style="background-color: #FFC6FF;"></span>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, PropType, ref } from 'vue'
export default defineComponent({
})
</script>

<style lang="scss" scoped>
.color-card {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff7e;
    backdrop-filter: blur(10px);
    flex-wrap: wrap;
}
.color-box {
    width: 16px;
    height: 16px;
    min-width: 16px;
    border: 4px solid #0f36ae;
    margin: 2px;
}
</style>