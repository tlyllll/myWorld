import request from '@/utils/api'

export const checkAuth = async function()  {
    let result:Boolean = false
    await request.get('/api/auth/is_login',{})
    .then((data: any) =>{
        console.log(data)
        result = data 
    })
    .catch((e)=>{
        console.log('checkAuth',e)
    })
    return result
}