<template>
    <Screen>
        <Card>
            <template v-slot:header>Two Factor Authentication</template>
            <template v-slot:body>
                <div class="py-4 flex flex-col">
                    <label for=""  class="mt-2">OTP Code:</label>
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