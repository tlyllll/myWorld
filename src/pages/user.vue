<template>
    <div class="container">
        <div class="info-content">
            <div class="row">
                <span class="title"> Nick Name: </span>
                <span v-if="show" class="data"> {{ userInfo.nickname }}</span>
                <input v-else class="edit-input">
            </div>
            <div class="row">
                <span class="title"> E-mail: </span>
                <span v-if="show" class="data"> {{ userInfo.email }}</span>
                <input v-else class="edit-input">
            </div>
            <div class="row">
                <span class="title"> Phone Number: </span>
                <span v-if="show" class="data"> {{ userInfo.phone }}</span>
                <input v-else class="edit-input">
            </div>
            <div class="row">
                <span class="title"> Birthday: </span>
                <span v-if="show" class="data"> {{ userInfo.birth.toDateString() }}</span>
                <input v-else class="edit-input">
            </div>

            <div v-if="show" @click="clickEdit" class="button">Edit</div>
            <div v-else @click="clickEdit" class="button">Back</div>

            <div class="button">Login Out</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from "pinia"

export default defineComponent({
    setup () {
        const store = useUserStore()
        const userInfo = store.$state.userInfo
        let show = ref(true)
        console.log(userInfo)
        function clickEdit () {
            show.value = !show.value;
        }
        return {
            userInfo,
            show,
            clickEdit
        }
    }
})
</script>

<style scoped lang="scss">
.container {
    /* box-shadow: 1px 1px 15px #e1c6cf; */
    height: 800px;
    width: 500px;
    margin: 17vh auto;
}
.info-content {
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 11px;
    font-family: monospace;
    font-size: 20px;
    box-shadow: 0 0 20px #e1c6cf;
}
.row {
    border-bottom: 1px dashed;
}
.title {
    font-weight: bold;
}
.edit-input {
    display: inline-block;
    height: 1.5em;
}
.button {
    background-color: #e1c6cf;
    width: 200px;
    border-radius: 5px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    box-shadow: 3px 3px 3px #000000a8;
    color: #fff;
    font-weight: bold;
    border: 1px solid #e1c6cf;

    &:hover {
        background-color: #fff;
        color: #e1c6cf;
        border: 1px solid #000
    }
}
@media only screen and (max-width: 768px){
    .container {
        width: 100vw;
    }
    .info-content {
        margin: 16px;
        font-size: 16px;
    }
}
</style>