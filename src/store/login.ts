import axios from 'axios'
import store from '../store/store'
import {LocalStorage} from '../util/local_storage'
import { UserModel } from '../model/user_model'


const local_storage = new LocalStorage()
const user = new UserModel()


const login = {
    state:()=>{
        return{
            loading: false,
            email:"",
            email_err_msg:"",
            password:"",
            password_err_msg:"",
        }
    },
    mutations:{
    },
    actions:{
        async login (s:any, payload:any){

            let email_s = true
            let password_s = true


            if(s.state.email == ""){
                email_s = false
                s.state.email_err_msg = "email can not be empty"
            }else if(!s.state.email.includes("@") || !s.state.email.includes(".")){
                email_s = false
                s.state.email_err_msg = "email not valid"
            }else{
                email_s = true
                s.state.email_err_msg = ""
            }
            
            if(s.state.password == ""){
                password_s = false
                s.state.password_err_msg = "password can not be empty"
            }else if(s.state.password.length<8){
                password_s = false
                s.state.password_err_msg = "password minimal 8 digit"
            }else{
                password_s = true
                s.state.password_err_msg = ""
            }

            if(email_s == false || password_s == false) return
            
            user.setEmail(s.state.email)
            user.setPassword(s.state.password)
            
            s.state.loading = true
            await axios.post(`${s.rootState.baseurl}/public/auth/login`, user.getLogin(),
            s.rootState.headers)
            .then((response)=>{
                console.log(response.data.data.status);
                s.state.loading = false
                
                if(response.data.data.status == 1 || response.data.data.status == 2){
                    local_storage.setSetup_token(response.data.data.verify_token)
                    payload.push({name:'setup-2fa'})
                }
                else if(response.data.data.status == 3){
                    local_storage.setVerify_token(response.data.data.verify_token)
                    payload.push({name:'verify-2fa'})
                }

                s.state.email = ""
                s.state.password = ""
                store.commit("showAlert", {
                    message: response.data.status,
                    type: "info"
                })
                
            })
            .catch((error)=>{
                console.log(error);
                
                s.state.loading = false

                store.commit("showAlert", {
                    message: error.response == null ? "Something went error!" : error.response.data.message, 
                    type: "error"
                })

            })
        }
    }

}

export default login