<template>
    <div class="menu">
        <!-- <div class="user-content" @click="goUser">
            <span class="iconfont icon-user1"></span>
            <span class="user-name">{{ userInfo.nickname }}</span>
        </div> -->
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
import { useUserStore } from '@/store/user';
import { defineComponent, PropType, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { storeToRefs } from "pinia"
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
        const store = useUserStore()
        const { userInfo } = storeToRefs(store)

        const router = useRouter()
        function active( name:string ) {
            if(name === 'ham') hamAct.value = hamAct.value ? false:true
            else {
                hamAct.value = false
                router.push({name:name})
            }
        }
        function goUser() {
            router.push({name:'User'})
        }
        return {
            menuItems,
            hamAct,
            active,
            userInfo,
            goUser
        }
    }

})
</script>

<style lang="scss" scoped>
.menu {
    // border-bottom: 1px solid #E2E8F0;
    background-color: #ffffff00;
    position: fixed;
    top: 0;
    height: 20px;
    width: 100vw;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    z-index: 100;
}
.menu::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(254 211 255 / 50%);
    backdrop-filter: blur(10px);
    opacity: 0.9;
    z-index: 0;
}
.logo-content {
    font-family: monospace;
    font-size: 2.1rem;
    font-weight: 800;
    color: #1531a8;
    border: 2px solid;
    background-color: #fff;
    height: 36px;
    line-height: 36px;
    width: 200px;
    text-align: center;
    border-radius: 5px ;
    z-index: 1;
    position: relative;
    left: 50vw;
    transform: translate(-124px);
}
.item-content {
    display: flex;
    position: relative;
    margin-right: 3rem;
}
.item {
    padding: 0 1em;
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
    border-bottom: 3px solid #0f36ae;
    content: "";
    transition: 0.2s all linear;
}

.item:hover {
    color: #000;
}
.item:hover::before {
    width: 100%;
    left: 0;
    transition-delay: 0.1s;
    border-bottom-color:#0f36ae;
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
.user-content {
    width: 261px;
    font-family: monospace;
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
        // background-color: #fff;
        background-color: rgb(254 211 255 / 50%);
        backdrop-filter: blur(10px);
        // box-shadow:0 10px 27px rgba(0, 0, 0, 0.05);
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
        z-index: 1;
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
        background-color: #ffffff6a;
    }
    .user-content {
        width: auto;
    }
}
.iconfont {
    font-size: 2rem;
}

</style>