<template>
    <div class="w-full h-[60px]  bg-white border-b-[1px] border-slate-300 shadow-sm">
        <div class="flex justify-between items-center h-[60px]">
            <div class="h-[60px] flex justify-start items-center">
                <i class="pi pi-bars mx-4" style="color: slateblue"></i>
                <p class="text-sm font-light">
                    Home > Files
                </p>

            </div>
            <div class="mx-4 flex">

                <template>
                    <div class="card flex flex-wrap justify-content-center gap-4">
                        <i v-badge="2" class="pi pi-bell p-overlay-badge" style="font-size: 2rem" />
                        <i v-badge.danger="'5+'" class="pi pi-calendar p-overlay-badge" style="font-size: 2rem" />
                        <i v-badge.danger class="pi pi-envelope p-overlay-badge" style="font-size: 2rem" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>


<script setup>
import Badge from 'primevue/badge';
import Input from '../../components/Input.vue';
</script>