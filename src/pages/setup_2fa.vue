<template>
    <Screen>
        <Card>
            <template v-slot:header>Two Factor Authentication</template>
            <template v-slot:body>
                <div v-if="this.$store.state.setup_2fa.generate_loading == true"
                    class="h-[100px] flex justify-center items-center my-4">
                    <ProgressSpinner class="w-[80px]" />
                </div>
                <div v-else class="py-4 flex flex-col">
                    <div
                        v-if="this.$store.state.setup_2fa.generate_loading == false && this.$store.state.setup_2fa.secret_key == null">
                        <p class="text-slate-400 font-light text-sm flex justify-center my-4">something went wrong</p>
                    </div>
                    <div v-if="this.$store.state.setup_2fa.secret_key != null" class="flex flex-col">
                        <label for="" class="mt-2">1. Scan Qr below:</label>
                        <vue-qr :text="this.$store.state.setup_2fa.otpauth_url" class="w-[200px]" :size="200"></vue-qr>
                        <label for="" class="mb-2">Or Copy Secret Key:</label>
                        <div
                            class=" bg-purple-50 border-[1px] flex items-center max-w-max px-4 py-2 rounded-sm text-sm text-slate-600">
                            <span class="text-[12px]">{{ this.$store.state.setup_2fa.secret_key }}</span>
                            <i class="pi pi-copy mx-4 cursor-pointer w-3" style="color: slateblue"></i>
                        </div>
                        <div class="flex flex-col my-3">
                            <label for="">Password</label>
                            <div
                                class="bg-slate-50 border-[1px] border-slate-200 px-3 py-3 my-2 rounded-sm flex items-center">
                                <i class="pi pi-lock" style="color: slateblue"></i>
                                <input v-model=this.$store.state.setup_2fa.otp_code type="password" class="mx-4 bg-transparent"
                                    placeholder="OTP Code">
                            </div>
                        </div>
                    </div>
                </div>
                <Button title="Verify" @click="verify_2fa()" :loading="this.$store.state.setup_2fa.verify_loading" />
            </template>
        </Card>
    </Screen>
</template>


<script>
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import Screen from '../components/ScreenWrapper.vue'
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import store from '../store/store'
import ProgressSpinner from 'primevue/progressspinner'

export default {
    mounted() {
        store.commit("redirect", this.$router)
        store.dispatch('generate2fa')
    },
    components: { vueQr, Screen, Card, Input, Button, ProgressSpinner },
    methods:{
        verify_2fa(){
            store.dispatch('verify_2fa', this.$router)
        }
    }

}
</script>