<template>
    <div>
        <button class=" bg-purple-500 text-white w-full rounded-sm shadow-sm py-2">
            <p v-if="loading == false">{{ title }}</p>
            <i v-else class="pi pi-spin pi-spinner" style="font-size: 1.3rem"></i>
        </button>
    </div>
</template>

<script>
export default {
    props: ["title", "loading"]
}
</script>