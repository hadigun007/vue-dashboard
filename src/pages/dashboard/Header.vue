<template>
    <div class="w-full h-[60px]  bg-white border-b-[1px] border-slate-300 shadow-sm">
        <div class="flex justify-between items-center h-[60px]">
            <div class="h-[60px] flex justify-start items-center">
                <i class="pi pi-bars mx-4" style="color: slateblue"></i>
                <p class="text-sm font-light">
                    Home > Files
                </p>

            </div>
            <div class="mx-4 flex items-center">
                <div class="bg-slate-50 border-[1px] border-slate-200 px-3 py-3 my-2 rounded-sm flex items-center">
                    <i class="pi pi-search" style="color: slateblue"></i>
                    <input v-model=this.$store.state.login.password type="text" class="mx-4 bg-transparent"
                        placeholder="Search">
                </div>
                <div class="mx-4">
                    <p @click="logout()" class="cursor-pointer bg-orange-400 px-2 py-1 rounded-sm text-white shadow-sm">
                        Logout
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
import Badge from 'primevue/badge';
import store from '../../store/store'


export default {

    components: { Badge },
    methods:{
        logout(){
            store.commit('logout', this.$router)
        }
    }

}
</script>