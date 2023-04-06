import request from '@/utils/api'

export const checkAuth = function()  {
    return request.get('/api/auth/is_login',{})
}