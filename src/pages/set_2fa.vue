<template>
    <Screen>
        <Card>
            <template v-slot:header>Two Factor Authentication</template>
            <template v-slot:body>
                <div class="py-4 flex flex-col">
                    <label for="" class="mt-2">1. Scan Qr below:</label>
                    <vue-qr text="dbnwhfboucbwoudebc ouh bw coo" class="w-[200px]" :size="200"></vue-qr>
                    <label for="" class="mb-2">Or Copy Secret Key:</label>
                    <div class=" bg-purple-50 border-[1px] flex items-center max-w-max px-4 py-2 rounded-sm text-sm text-slate-600">
                        <span>ASDFGHJKIUYTGFVBJKUYTFVBN</span>
                        <i class="pi pi-copy mx-4 cursor-pointer w-3" style="color: slateblue"></i>
                    </div>
                    <label for=""  class="mt-2">2. OTP Code:</label>
                    <Input label="" placeHolder="OTP Code" types="password">

                    <template v-slot:prefixIcon>
                        <i class="pi pi-key" style="color: slateblue"></i>
                    </template>
                    </Input>
                </div>
                <Button title="Verify" />
            </template>
        </Card>
    </Screen>
</template>


<script setup>
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import Screen from '../components/ScreenWrapper.vue'
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
</script>