import axios from 'axios'
import store from './store'
import {LocalStorage} from '../util/local_storage'

const local_storage = new LocalStorage()

const setup_2fa = {
    state:()=>{
        return{
            generate_loding: false,
            verify_loading: false,
            secret_key:null,
            otpauth_url:null 
        }
    },
    actions:{
        async generate2fa(s:any, payload:any){
            s.state.generate_loading = true
            await axios.get(`${s.rootState.baseurl}/public/auth/generate_2fa/${local_storage.getVerify_token()}`,
            s.state.headers)
            .then((response)=>{
                console.log(response);
                s.state.generate_loading = false
                store.commit("showAlert", {
                    message: response.data.status,
                    type: "info"
                })
            })
            .catch((error)=>{
                
                console.log(error);
                s.state.generate_loading = false
                s.state.loading = false
                store.commit("showAlert", {
                    message: error.response.data.message,
                    type: "error"
                })
            })

        },
        async setup2fa (s:any, payload:any){
            
            await axios.post(`${s.state.login.baseurl}/public/auth/setup_2fa`, payload.user,
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

export default setup_2fa