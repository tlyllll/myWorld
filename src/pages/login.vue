<template>
    <div class="container">
        <span class="status"> {{ status }} </span>
        <div class="item" v-if="status === 'LOGIN'">
            <div>E-mail / phone-number</div>
            <input v-model="username"/>
            <span v-show="!legalUsername" class="wrong-msg">请输入正确账号！</span>
        </div>
        <div class="item">
            <div>Password</div>
            <input type="password" v-model="userInfo.password"/>
            <span v-show="!legalPW" class="wrong-msg">密码需为字母、数组或符号组成，长度在6-20位之间，至少1个字母和数字！</span>
        </div>
        <div v-if="status=='Sign up'">
        <div class="item">
            <div>Repeat Password</div>
            <input type="password" v-model="rePassword"/>
            <span v-show="showRePW" class="wrong-msg">两次密码需一致！</span>
        </div>
        <div class="item">
            <div>E-mail</div>
            <input v-model="userInfo.email"/>
            <span v-show="!legalEM" class="wrong-msg">请输入正确邮箱！</span>
        </div>
        <div class="item">
            <div>Phone-number</div>
            <input v-model="userInfo.phone"/>
            <span v-show="!legalPhone" class="wrong-msg">请输入正确手机号码！</span>
        </div>
        
        <div class="item">
            <div>NickName</div>
            <input v-model="userInfo.nickname"/>
            <span 
            v-show="userInfo.nickname.length>=20 || userInfo.nickname.length==0" 
            class="wrong-msg">长度须在2-20字符之间！</span>
        </div>
        <div class="item">
            <div>Birthday</div>
            <input type="date" v-model="userInfo.birth"/>
        </div>
        </div> 
        <div @click="login" class="btn">SIGN IN</div>
        <div @click="signUp" style="margin-bottom: 50px;" class="btn">SIGN UP</div>
    </div>
    <div class="bottom"></div>
    
</template>

<script lang="ts">
import { computed, defineComponent, ref,inject } from 'vue'
import request from '@/utils/api'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import router from '@/router'
import Cookies from 'js-cookie'
import md5 from 'js-md5'
interface User {
    phone: string,
    password: string,
    nickName:string,
    email: string,
    birth: Date
}
export default defineComponent({
    setup (props) {
        const reload:any = inject('reload')
        let status = ref('LOGIN')
        const username = ref('')
        const rePassword = ref('')
        const userInfo = ref({
            phone: '',
            password: '',
            nickname:'',
            email: '',
            birth: new Date().toLocaleDateString()
        })
        
        const showRePW = computed(()=>userInfo.value.password!==rePassword.value)
        const legalPW = computed(()=>
        /^(?=.*([a-z]|[A-Z]))(?=.*\d)[a-zA-Z\d]{6,20}$/.test(userInfo.value.password))
        const legalEM = computed(()=>
        /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(userInfo.value.email))
        const legalPhone = computed(()=>
        /^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/.test(userInfo.value.phone))
        const legalUsername = computed(()=>
        /^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/.test(username.value) || 
        /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(username.value))
        async function signUp() {
            if(status.value == 'LOGIN') {
                status.value = 'Sign up'
                return
            }
            if(!legalEM || !legalPhone || !legalPW|| showRePW.value || userInfo.value.nickname.length==0) {
                console.log('wrong')
                return
            }
            const postInfo = {
                phone: userInfo.value.phone,
                password: md5(userInfo.value.password),
                nickname:userInfo.value.nickname,
                email: userInfo.value.email,
                birth: userInfo.value.birth
            }
            await request.post('/api/users/register',postInfo).then((res:any)=>{
                status.value = 'LOGIN' 
                location.reload() 
            })
        }
        async function login() {
            if(status.value == 'Sign up') {
                status.value = 'LOGIN'
                return
            }
            await request.post('/api/auth/login',{
                username: username.value,
                password: md5(userInfo.value.password)
            }).then((res:any)=>{
                const { data, token } = res
                const store = useUserStore()
                store.updateInfo(data)
                Cookies.set('token', token, { expires: 2 })

                router.push({name:'Index'})
            }).catch(e => {
                console.log(e)
            })
        }
        return {
            status,
            username,
            userInfo,
            rePassword,
            showRePW,
            legalPW,
            legalEM,
            legalPhone,
            signUp,
            login,
            legalUsername
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
input {
    height: 28px;
    margin-top: 5px;
    border: 1px solid #bcbcbcf7;
    border-radius: 3px;
    padding: 10px 15px;
    font-size: 16px;
}
.status {
    font-size: 2rem;
    font-weight: 200;
    margin: 5px 12px 20px 5px;
    display: block;
}
.item {
    display: flex;
    flex-direction: column;
    margin: 5px 12px;
    font-weight: 300;
}
.wrong-msg {
    color: rgb(239, 1, 1);
    font-size: 10px;
}
.btn {
    border: 1px solid #000;
    text-align: center;
    width: 200px;
    height: 50px;
    margin: 10px auto;
    line-height: 50px;
    &:hover {
        background-color: #000;
        color: #fff;
    }
}
.bottom {
    height: 5vh;
}
@media only screen and (max-width: 768px){
.container{
    width: 100vw;
}
}
</style>