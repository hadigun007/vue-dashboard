<template>
    <div class="bg-white p-4 shadow-sm rounded-sm flex flex-col w-[350px]">
        <main class="border-b-[1px] font-semibold flex justify-center py-2"><slot name="header"></slot></main>
        <main><slot name="body">
            
        </slot></main>
        <main><slot name="footer"></slot></main>
    </div>
</template>

