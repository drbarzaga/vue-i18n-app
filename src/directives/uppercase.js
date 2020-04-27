import Vue from 'vue';

export const UpperCase = {
    bind(el) {
        if (el) {
            el.text = el.text.toUpperCase()
        }
    }
}

Vue.directive( 'uppercase', UpperCase)