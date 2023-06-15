import UserInfo from '@/utils/commonType'
import { defineStore } from 'pinia'
import * as moment from 'moment';


export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            userInfo: {
                nickname: 'Login',
                phone: '110',
                email: '',
                id: -1,
                birth: new Date()
            }
        }
    },
    persist: {
        storage: window.localStorage,
        beforeRestore: context => {
            console.log('Before', context.pinia.state.value.user.userInfo)
        },
        afterRestore: context => {
            console.log('After', context)
            context.pinia.state.value.user.userInfo.birth = new Date(context.pinia.state.value.user.userInfo.birth)

        }
    },
    actions: {
        updateInfo(userinfo: UserInfo) {
            this.userInfo.nickname = userinfo.nickname
            this.userInfo.phone = userinfo.phone
            this.userInfo.email  = userinfo.email
            this.userInfo.id  = userinfo.id
            this.userInfo.birth = new Date(userinfo.birth)
            console.log(this.userInfo)
        },
        initUserInfo() {
            this.userInfo.nickname = 'Login'
            this.userInfo.phone = '110'
            this.userInfo.email  = ''
            this.userInfo.id = -1
            this.userInfo.birth = new Date()
        }
    }
})