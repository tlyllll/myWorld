<template>
    <div class="footer-content"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped>
.footer-content {
    height: 140px;
    width: 100%;
    background-color: rgb(255 255 255 / 49%);
    backdrop-filter: blur(10px);
    margin-top: 140px;
    /* background-color: url('@/assets/img/rm200-ning-30.jpg'); */
}
.img-content {
    /* height: 140px; */
    width: 100%;
}
</style>
