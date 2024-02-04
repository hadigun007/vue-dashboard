import axios from 'axios'
import store from './store'
import {LocalStorage} from '../util/local_storage'
import { UserModel } from '../model/user_model'

const local_storage = new LocalStorage()
const user = new UserModel()

const verify_2fa = {
    state:()=>{
        return{
            verify_loading: false,
            otp_code: "",
        }
    },
    mutations:{
    },    
    actions:{
        async verify2fa (s:any, payload:any){

            user.setOtpCode(s.state.otp_code)
            user.setVerify_token(local_storage.getVerify_token())

            await axios.post(`${s.rootState.baseurl}/public/auth/verify_2fa`, user.getVerify2fa(),
            s.state.headers)
            .then((response)=>{    
                s.state.loading = false
                payload.push({name:'dashboard'})
                local_storage.removeVerifyToken()
                local_storage.setJwt_token(response.data.token)
                s.state.otp_code = ""
                store.commit("showAlert", {
                    message: response.data.status,
                    type: "info"
                })
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