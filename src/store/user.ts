import UserInfo from '@/utils/commonType'
import { defineStore } from 'pinia'


export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            userInfo: {
                nickname: 'Login',
                phone: '110',
                email: '',
                id: -1
            }
        }
    },
    actions: {
        updateInfo(userinfo: UserInfo) {
            this.userInfo.nickname = userinfo.nickname
            this.userInfo.phone = userinfo.phone
            this.userInfo.email  = userinfo.email
            this.userInfo.id  = userinfo.id
            console.log(this.userInfo)
        },
        initUserInfo() {
            this.userInfo.nickname = 'Login'
            this.userInfo.phone = '110'
            this.userInfo.email  = ''
            this.userInfo.id = -1
        }
    }
})