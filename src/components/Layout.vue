<template>
    <div>
         <layout-header></layout-header>
         <div class="container">
             <slot></slot>
             <layout-footer></layout-footer>
        </div>
    </div>
</template>

<script>
    import LayoutHeader from "./Partials/LayoutHeader";
    import LayoutFooter from "./Partials/LayoutFooter";
    export default {
        name: "Layout",
        components: {
            LayoutHeader,
            LayoutFooter
        }
    }
</script>

<style scoped>

</style>