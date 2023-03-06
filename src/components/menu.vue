<template>
    <div>
        <div class="logo-content"></div>
        <div class="item-content">
            <div class="item" v-for="(item, index) in menuItems" :key="index">{{ item.name }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
// import MenuProps from '@/components/PropTypes'
interface MenuProps {
    name: string,
    path:string
}
export default defineComponent({
    
    props: {
        menuItems: Array as unknown as PropType<MenuProps[]>,
    },
    setup (props) {

        const menuItems = props.menuItems
        console.log(menuItems)
        return {menuItems}
    }

})
</script>

<style lang="scss" scoped>

</style>