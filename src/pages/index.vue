<template>
    <Menu :menuItems="menuItems"/>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import Menu from '@/components/menu.vue';
  
  interface MenuProps {
      name: string,
      path: string
  }
  export default defineComponent({
    components: {
      Menu
    },
    setup() {
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
        menuItems
      }
    }
  })
</script>
<style scoped>
</style>
  