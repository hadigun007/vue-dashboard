<template>
    <div class="flex flex-col my-3">
        <label for="">{{ label }}</label>
        <div class="bg-slate-50 border-[1px] border-slate-200 px-3 py-3 my-2 rounded-sm flex items-center">
            <span>
                <slot name="prefixIcon"></slot>
            </span>
            <input :value="value" @input="$emit('input', $event.target.value)" :type=types class="mx-4 bg-transparent" :placeholder=placeHolder >
        </div>
    </div>
</template>

<script>
export default {
    props:["label", "placeHolder", "types", "value"],
    methods:{
        onchanges(e){
            console.log(e);
        }
    }
}
</script>

<style>
textarea:focus, input:focus{
    outline: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px rgb(248 250 252 / var(--tw-bg-opacity)) inset !important;
}
</style>