<template>
    <Screen>
        <Card>
            <template v-slot:header>Register</template>
            <template v-slot:body>
                <div>
                    <Input label="Name" placeHolder="Name"  types="text">
                        <template v-slot:prefixIcon>
                            <i class="pi pi-user" style="color: slateblue"></i>
                        </template>
                    </Input>
                    <Input label="Email" placeHolder="Email"  types="email">
                        <template v-slot:prefixIcon>
                            <i class="pi pi-envelope" style="color: slateblue"></i>
                        </template>
                    </Input>
                    <Input label="Password" placeHolder="Password"  types="password">
                        <template v-slot:prefixIcon>
                            <i class="pi pi-key" style="color: slateblue"></i>
                        </template>
                    </Input>
                </div>
                <Button title="Sign Up" />
                <div class="flex my-4 text-[12px] text-slate-500">
                    <span class="">Already have an account,</span> 
                    <a href="" class="text-blue ml-1" onclick="this.$router.push({name:'login'})"> login</a>
                </div>
            </template>
        </Card>
    </Screen>
</template>


<script setup>
import Screen from '../components/ScreenWrapper.vue'
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
</script>