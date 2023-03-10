<template>
    <div class="carousel">
        <!-- 图片部分 -->
        <ul class="carousel-content">
            <li
                class="carousel-item"
                v-for="(item,index) in sliders"
                :key="index"
            >
                <RouterLink to="/">
                    <img :src="item.imgUrl"/>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
interface imgProps {
    imgUrl: string,
    toPath: string
}
export default defineComponent({
    props: {
        sliders: Array as unknown as PropType<imgProps[]>
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>