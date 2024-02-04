<template>
        <div class="flex">
           <Sidebar/>
            <Content/>
        </div>
    </template>

<script>
import Sidebar from './dashboard/sidebar.vue'
import Content from './dashboard/Content.vue'
import store from '../store/store'


export default {
    created(){
        store.commit("redirect", this.$router)
    },
    components:{Sidebar, Content},
}
</script>