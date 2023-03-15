<template>
  <Menu :menuItems="menuItems"/>

  <RouterView/>
</template>
<script lang="ts">
import Menu from '@/components/menu.vue';
import { defineComponent } from 'vue';
interface MenuProps {
    name: string,
    path: string
}
export default defineComponent({
  components: {
    Menu
  },
  setup() {
      const baseImgUrl = '/src/assets/img/'
      const menuItems: Array<MenuProps> = [
        {
          name:'Home',
          path:'Index'
        },
        {
          name:'Note',
          path:'Index'
        },
        {
          name:'Community',
          path:'Index'
        },
        {
          name: 'About me',
          path:'Index'
        }
      ]
      return {
        menuItems,
      }
    }
});
</script>
<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
