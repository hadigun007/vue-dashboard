import axios from 'axios'
import store from './store'
import {LocalStorage} from '../util/local_storage'
import { UserModel } from '../model/user_model'

const local_storage = new LocalStorage()
const user = new UserModel()

const setup_2fa = {
    state:()=>{
        return{
            generate_loding: false,
            verify_loading: false,
            secret_key:null,
            otpauth_url:null,
            otp_code:"",
        }
    },
    actions:{
        async generate2fa(s:any, payload:any){
            s.state.generate_loading = true
            await axios.get(`${s.rootState.baseurl}/public/auth/generate_2fa/${local_storage.getSetup_token()}`,
            s.state.headers)
            .then((response)=>{
                local_storage.setSetup_token(response.data.data.verify_token)
                s.state.generate_loading = false
                s.state.secret_key = response.data.data.secret_key
                s.state.otpauth_url = response.data.data.otpauth_url
                s.state.otp_code = ""

                store.commit("showAlert", {
                    message: response.data.status,
                    type: "info"
                })
            })
            .catch((error)=>{
                
                s.state.generate_loading = false
                s.state.loading = false
                store.commit("showAlert", {
                    message: error.response.data.message,
                    type: "error"
                })
            })

        },
        async verify_2fa (s:any, payload:any){
            user.setOtpCode(s.state.otp_code)
            user.setVerify_token(local_storage.getSetup_token())
            
            await axios.post(`${s.rootState.baseurl}/public/auth/verify_2fa`, user.getVerify2fa(),
            s.state.headers)
            .then((response)=>{    
                s.state.loading = false
                payload.push({name:'dashboard'})
                local_storage.removeSetupToken()
                local_storage.setJwt_token(response.data.token)
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

export default setup_2fa