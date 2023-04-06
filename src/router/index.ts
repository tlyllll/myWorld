import { KeepAlive } from 'vue'
import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw} from 'vue-router'
import { useUserStore } from '@/store/user'
import { checkAuth } from '@/utils/commonApi'
import Cookies from 'js-cookie'
import request from '@/utils/api'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            KeepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/user',
        name: 'User',
        meta: {
            title: '个人资料',
            KeepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/user.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            KeepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach( (to:RouteLocationNormalized, from, next) => {
    if(to.matched.some(recode => recode.meta.requireAuth)) {
        request.get('/api/auth/is_login',{}).then((data: any) =>{
            console.log('isLogin',data)
            next()
        }).catch((e: any)=>{
            console.log('checkAuth',e)
            const store = useUserStore()
            store.initUserInfo()
            next({name: 'Login'})
        })
    } else {
        next()
    }
})
export default router;