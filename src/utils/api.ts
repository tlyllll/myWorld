import service from "./axios";
//引入我们封装好的axios
 
const 根据实际情况取函数名字 = () => {
    return service.get('这里填接口地址',{
         params: {
            //这里面传参数
        }
    })
}
 
//导出这个函数方法
export default { 
    //这里面填函数名字 
};