<template>
    <div>
        <Transition name="slide">
            <div v-if="this.$store.state.components.alert.show == true" 
                :class="[this.$store.state.components.alert.type == 'error' ? ' border-l-red-600 border-l-[2px] border-red-300':'border-l-blue-600 border-l-[2px] border-blue-300']"
                class="absolute top-5 right-5 w-[300px] flex justify-between items-center bg-white font-light text-sm px-4 py-3 my-2 rounded-md shadow-md border-[1px] ">
            <div class="flex items-center">
                <i v-if="this.$store.state.components.alert.type != 'error'" class="pi pi-check-circle mr-2" style="font-size: 1rem; color: green;"></i>
                <i v-else class="pi pi-times-circle mr-2" style="font-size: 1rem; color: red;"></i>
                <p>{{ this.$store.state.components.alert.message  }}</p>
            </div>
            <i class="pi pi-times cursor-pointer" style="font-size: 0.5rem"></i>
        </div>
    </Transition>
    </div>
</template>


<style scoped>
.slide-enter-from{
    transform: translateX(200px);
}
.slide-enter-active{
    transition: all 0.1s ease-in;
}
.v-leave-to {
    transform: translateX(0);
}


.slide-leave-from{
    transform: translateX(0);
}
.slide-leave-active{
    transition: all 0.3s ease-out;
}
.slide-leave-to {
    transform: translateX(200px);
}


</style>