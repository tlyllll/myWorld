<template>
    <div class="menu">
        <div class="logo-content">#Wod.</div>
        <div class="item-content" :class="{'active': hamAct}">
            <div class="item" 
            v-for="(item, index) in menuItems" 
            :key="index"
            @click="active(item.path)">{{ item.name }}</div>
        </div>
        <div class="hamburger" @click="active('ham')" :class="{'active': hamAct}">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { useRouter } from 'vue-router';
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
        let hamAct= ref(false)
        const menuItems = props.menuItems
        const router = useRouter()
        function active( name:string ) {
            if(name === 'ham') hamAct.value = hamAct.value ? false:true
            else {
                hamAct.value = false
                router.push({name:name})
            }
        }
        return {
            menuItems,
            hamAct,
            active
        }
    }

})
</script>

<style lang="scss" scoped>
.menu {
    border-bottom: 1px solid #E2E8F0;
    background-color: #fff;
    position: fixed;
    top: 0;
    height: 8vh;
    width: 100vw;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    z-index: 100;
}
.logo-content {
    font-family: monospace;
    font-size: 2.1rem;
    font-weight: 800;
    color: #4d8900;
}
.item-content {
    display: flex;
    position: relative;
    margin-right: 3rem;
}
.item {
    padding: 0 1.5em;
    font-weight: 500;
    display: block;
    position: relative;
    transition:0.2s all linear;
    cursor:pointer;
}

.item::before {
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 100%;
    border-bottom: 3px solid #000;
    content: "";
    transition: 0.2s all linear;
}

.item:hover {
    color: #3670bd;
}
.item:hover::before {
    width: 100%;
    left: 0;
    transition-delay: 0.1s;
    border-bottom-color:#000;
}
.item:hover ~ .item::before {
    left: 0;
}
.hamburger {
    display: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
}

@media only screen and (max-width: 768px){
    .item-content {
        position: fixed;
        left: 100%;
        flex-direction: column;
        width: 100%;
        text-align: center;
        top: 8vh;
        transition: 0.3s;
        background-color: #fff;
        box-shadow:0 10px 27px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
    }
    .item-content.active {
        left: 0;
    }
    .item {
        margin: 2.5rem 0;
    }
    .hamburger {
        display: block;
        cursor: pointer;
        margin-right: 50px;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    .item:hover::before {
        width: 0;
    }
    .item:hover {
        font-weight: 700;
    }
}
</style>