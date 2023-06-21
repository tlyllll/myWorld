<template>
    <div
        class="small-web"
        :style="{ height: ShapeIs.height, width: ShapeIs.width, backgroundColor: ShapeIs.backGroundColor }"
    >
        <div class="v-negative"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        ShapeIs: {
            type: Object,
            default: {
                height: `200px`,
                width: `32vw`,
                backGroundColor: `#b8ffff`,
            },
        },
    },
    setup(props) {
        return {
            ...props,
        };
    },
});
</script>

<style scoped>
.small-web {
    background-color: aliceblue;
    border: 4px solid #0f36ae;
    min-width: 330px;
    flex: 1;
    position: relative;
    margin: 15px 15px;
}
</style>
