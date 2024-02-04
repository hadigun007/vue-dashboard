<template>
    <Screen>
        <Card>
            <template v-slot:header>Two Factor Authentication</template>
            <template v-slot:body>
                <div>
                    <div class="flex flex-col my-3">
                        <label for="">OTP Code</label>
                        <div class="bg-slate-50 border-[1px] border-slate-200 px-3 py-3 my-2 rounded-sm flex items-center">
                            <i class="pi pi-key" style="color: slateblue"></i>
                            <input v-model=password type="password" class="mx-4 bg-transparent" placeholder="OTP Code">
                        </div>
                    </div>
                </div>
                <Button title="Verify" :loading="this.$store.state.verify_2fa.verify_loading" />
            </template>
        </Card>
    </Screen>
</template>


<script>
import Screen from '../components/ScreenWrapper.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import store from '../store/store'
export default {
    created() {
        store.commit("redirect", this.$router)
    },
    components: { Screen, Card, Button }
}
</script>