<template>
   <div class="form-group form-inline">
       <label for="locale">{{ $t('main.locale') }}</label>
       <select v-model="$i18n.locale" class="form-control" id="locale">
           <option v-for="locale in locales" :value="locale" :key="locale" v-upper-case>{{ locale }}</option>
       </select>
   </div>
</template>

<script>
    import { UpperCase } from "../../directives/uppercase";

    export default {
        name: "LocaleSwitcher",
        directives: {
           UpperCase
        },
        data(){
            return {
                currentLocale: this.$i18n.locale,
                locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
            }
        },
        methods: {
            changeLocale(locale){
               if(this.$i18n.locale !== locale){
                    this.$i18n.locale = locale;
               }
            }
        }
    }
</script>

<style scoped>

</style>