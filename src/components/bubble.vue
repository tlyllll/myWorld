<template>
    <div class="bubble" @mouseover="mouseEnter" @mouseout="mouseOut">
        <slot></slot>
        <div
            v-show="isActive"
            :style="{ width: widthIs + 'px', left: leftDis }"
            class="bubble-content"
            :class="className"
        >
            {{ innerText }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, PropType, ref } from 'vue';
export default defineComponent({
    props: {
        innerText: String,
        widthIs: {
            type: String,
            default: ``,
        },
        className: {
            type: String,
            default: `bubble-top`,
        },
    },
    setup(props) {
        let isActive = ref(false);
        const mouseEnter = () => {
            isActive.value = true;
        };
        const mouseOut = () => {
            isActive.value = false;
        };
        const widthIs = parseInt(props.widthIs) || 200;
        const leftDis =
            props.className == 'bubble-right'
                ? `${-(widthIs + 32)}px`
                : `${-((widthIs + 24) / 2 - 24)}px`;

        return {
            ...props,
            mouseEnter,
            mouseOut,
            isActive,
            leftDis,
            widthIs,
        };
    },
});
</script>

<style lang="scss" scoped>
.bubble {
    position: relative;
}
.bubble-content {
    /* Modify size here: */
    --size: 100px;
    position: absolute;
    padding: 0 10px;
    height: calc(var(--size) * 0.44);
    background: #b0e1ff;
    border-radius: 10px;
    border: 2px solid #0f36ae;
    float: left;
    text-align: center;
    line-height: calc(var(--size) * 0.44);
    font-weight: 400;
    color: #0f36ae;
    font-family: monospace;
}
.bubble-bottom {
    bottom: 140%;
}
.bubble-top {
    top: 100%;
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
.bubble-bottom:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: calc(var(--size) * 0.13) solid transparent;
    border-top-color: #0f36ae;
    border-bottom: 0;
    margin-left: calc(var(--size) * 0.13 * -1);
    margin-bottom: calc(var(--size) * 0.13 * -1);
}
.bubble-right {
    left: -200%;
    bottom: 20%;
}
.bubble-left:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: calc(var(--size) * 0.13) solid transparent;
    border-right-color: #0f36ae;
    border-left: 0;
    margin-top: calc(var(--size) * 0.13 * -1);
    margin-left: calc(var(--size) * 0.13 * -1);
}

.bubble-right:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: calc(var(--size) * 0.13) solid transparent;
    border-left-color: #0f36ae;
    border-right: 0;
    margin-top: calc(var(--size) * 0.13 * -1);
    margin-right: calc(var(--size) * 0.13 * -1);
}
</style>
