import { defineStore } from 'pinia'
import {myAxios} from "../utils/MyAnxios";

// 这里利用的是Pinia   将一些常见，频繁用到的量存起来，比如user的信息
const useUserStore = defineStore('userStore', {
    //缓存持久化
    persist:true,
    // 下面的属性请求的时候会经常用到，所以找个地方存起来
    state: () =>
        (
            {
                username: '',
                isShowModal:false,
                info:'',
            }
        ),
    // 这里基本上是对上面方法的CRUD
    actions:{
        setInfo(info:string){
            this.info = info
        },
        getInfo(){
          return this.info + "written By ht" ;
        },
        setIsShowModal(isShowModal:boolean){
            this.isShowModal = isShowModal
        },
        getIsShowModal(){
            return this.isShowModal;
        },
    }
})

export {
    useUserStore
}










