<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">{{ appName }}</h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <locale-switcher></locale-switcher>
        </nav>
    </div>
</template>

<script>
    import LocaleSwitcher from "../General/LocaleSwitcher";
    export default {
        name: "LayoutHeader",
        components: {
           LocaleSwitcher
        },
        data(){
            return {
                appName: process.env.VUE_APP_NAME
            }
        }
    }
</script>

<style scoped>

</style>