<template>
    <Screen>
        <Card>
            <template v-slot:header>Login</template>
            <template v-slot:body>
                <div>
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
                <Button title="Sign In" />
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