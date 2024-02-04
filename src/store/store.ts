import { createStore } from "vuex";
import login from "./login";
import setup_2fa from './setup_2fa'
import components from './components'
import verify_2fa from "./verify_2fa";
import { LocalStorage } from "../util/local_storage";

const local_storage = new LocalStorage()


const store = createStore({
    modules:{ verify_2fa, login, setup_2fa, components },
    state:()=>{
        return {
            baseurl:"http://127.0.0.1:8080/v1",
            header:{
                headers:{
                    'Content-Type':'application/json',
                    'x-api-key':'wjf98e9bvicpuwbapgc'
                }
            },
        }
    },
    mutations:{
        redirect(s:any, payload:any){
         if(local_storage.getJwt_token() != null){
             payload.push({name:"dashboard"})   
         }
            else if(local_storage.getSetup_token() != null){
            payload.push({name:"setup-2fa"})   
        }else if(local_storage.getVerify_token() != null){
            payload.push({name:"verify-2fa"})   
        }else{
            payload.push({name:"login"})   
        }   
        }
    }
})


export default store