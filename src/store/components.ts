const components = {
    state:()=>{
        return {
            alert:{
                show: false,
                message: "",
                type: ""
            }
        }
    },
    mutations:{
        showAlert(s:any, payload:any){
            s.alert.show = true
            s.alert.message = payload.message
            s.alert.type = payload.type
            setTimeout(() => {
                s.alert.show = false
                s.alert.message = ""
                s.alert.type = ""
            }, 2000);
        },
    }
}

export default components