import axios from 'axios'
import store from './store'
import {LocalStorage} from '../util/local_storage'

const local_storage = new LocalStorage()

const verify_2fa = {
    state:()=>{
        return{
            verify_loading: false,
            otp_code: false,

        }
    },
    mutations:{
        init(s:any, payload:any){
            
                s.verify_loading = false
                s.otp_code = ""
                
        },
    }
,    actions:{
        async setup2fa (s:any, payload:any){
            await axios.post(`${s.state.login.baseurl}/public/auth/verify_2fa`, payload.user,
            s.state.headers)
            .then((response)=>{
                
                s.state.loading = false
                local_storage.setVerify_token(response.data.data.verify_token)
                store.commit("showAlert", {
                    message: response.data.status,
                    type: "info"
                })
                payload.router.push({name:'setup-2fa'})
                
            })
            .catch((error)=>{
                s.state.loading = false
                store.commit("showAlert", {
                    message: error.response.data.message,
                    type: "error"
                })

            })
        }
    }

}

export default verify_2fa