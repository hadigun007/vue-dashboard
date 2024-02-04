<template>
    <Screen>
        <Card>
            <template v-slot:header>Login</template>
            <template v-slot:body>
                <div>
                    <div class="flex flex-col my-3">
                        <label for="">Email</label>
                        <div 
                        :class="[this.$store.state.login.email_err_msg == '' ? '':'border-red-600']"
                        class="bg-slate-50 border-[1px] border-slate-200 px-3 py-3 my-2 rounded-sm flex items-center">
                            <i class="pi pi-envelope" style="color: slateblue"></i>
                            <input v-model="this.$store.state.login.email" type="email" class="mx-4 bg-transparent"
                                placeholder="Email">
                            </div>
                            <span class="text-[11px] font-light text-red-500">{{ this.$store.state.login.email_err_msg }}</span>
                            
                        </div>
                        <div>
                            <div class="flex flex-col my-3">
                                <label for="">Password</label>
                                <div
                                :class="[this.$store.state.login.password_err_msg == '' ? '':'border-red-600']"
                                class="bg-slate-50 border-[1px] border-slate-200 px-3 py-3 my-2 rounded-sm flex items-center">
                                <i class="pi pi-key" style="color: slateblue"></i>
                                <input v-model=this.$store.state.login.password type="password" class="mx-4 bg-transparent"
                                placeholder="Password">
                            </div>
                            <span class="text-[11px] font-light text-red-500">{{ this.$store.state.login.password_err_msg }}</span>
                        </div>
                    </div>
                </div>

                <Button @click="login()" title="Sign In" :loading="this.$store.state.login.loading" />

                <div class="flex my-4 text-[12px] text-slate-500">
                    <span class="">Dont have an account yet,</span>
                    <a href="" class="text-blue ml-1" onclick="this.$router.push({name:'register'})"> register</a>
                </div>
            </template>
        </Card>
    </Screen>
</template>


<script>
import Screen from '../components/ScreenWrapper.vue'
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import store from '../store/store'


export default {
    created() {
        store.commit('redirect', this.$router)
    },
    components: {
        Screen, Card, Input, Button
    },
    methods: {
        login() {
            store.dispatch('login', this.$router)
        }
    }
}
</script>