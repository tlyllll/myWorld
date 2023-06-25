<template>
    <div
        class="small-web"
        :style="{
            height: ShapeIs.height,
            width: ShapeIs.width,
            backgroundColor: ShapeIs.backGroundColor,
        }"
    >
        <div class="v-negative">
            <span>{{ title }}</span>
            <div class="icon">
                <svg class="windows-control">
                    <image
                        href="@/assets/img/icons8-minimize-window-16.png"
                        height="100%"
                        width="100%"
                    />
                </svg>
                <svg class="windows-control">
                    <image
                        href="@/assets/img/icons8-maximize-window-16.png"
                        height="100%"
                        width="100%"
                    />
                </svg>
                <svg class="windows-control">
                    <image
                        href="@/assets/img/icons8-close-window-16.png"
                        height="100%"
                        width="100%"
                    />
                </svg>
            </div>
        </div>
        <div class="inner">
            <svg class="img-content">
                <image
                    :href="imgPath"
                    height="100%"
                    width="100%"
                />
            </svg>
            <div class="text-content">
                <slot></slot>
                <button>Click Here</button>
            </div>
        </div>
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
        title: String,
        imgPath: String,
    },
    setup(props) {
        console.log(props.imgPath)
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
    background-image: linear-gradient(176deg, #8cd6fe, #fafbde);
    min-width: 330px;
    flex: 1;
    position: relative;
    margin: 15px 15px;
}
.v-negative {
    height: 20px;
    border-bottom: 4px solid #0f36ae;
    display: flex;
    padding: 0 5px;
    color: #0f36ae;
    justify-content: space-between;
    line-height: 20px;
    font-family: 'press start 2p';
    font-weight: 100;
    font-size: 12px;
}
.windows-control {
    width: 18px;
    height: 18px;
    margin: 1px;
}
.img-content {
    width: 108px;
    height: 136px;
    background-color: #ffffff9b;
    /* border: 4px solid #0f36ae; */
    border-radius: 16px;
    padding: 10px;
    backdrop-filter: blur(8px);

}
.inner {
    display: flex;
    justify-content: space-around;
    /* width: 100%; */
    padding: 10px;
}
.text-content {
    flex: 1;
    position: relative;
}
button {
    width: 144px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
}
</style>
