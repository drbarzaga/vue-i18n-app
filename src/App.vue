<template>
  <div id="app">
    <layout>
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 shadow-sm" v-for="plan in plans" :key="plan">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal" v-if="plan.free">{{ $t('main.free') }}</h4>
            <h4 class="my-0 font-weight-normal" v-else>{{ $t('main.paid') }}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$ {{ plan.price }} <small class="text-muted">/ {{ $t('main.month') }}</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>{{ plan.users }} {{ $t('main.users_included') }}</li>
              <li>{{ plan.space }} GB {{ $t('main.storage')}}</li>
              <li v-if="plan.emailSupport">{{ $t('main.email_support') }}</li>
              <li v-if="plan.helpCenter">{{ $t('main.help_center')}}</li>
            </ul>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">{{ $t('main.select') }}</button>
          </div>
        </div>
      </div>
    </layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
export default {
  name: 'App',
  components: {
    Layout
  },
  data(){
    return {
      plans: [
        {
          free: true,
          price: 0,
          users: 3,
          space: 0.5,
          emailSupport: false,
          helpCenter: false
        },
        {
          free: false,
          price: 5,
          users: 7,
          space: 1,
          emailSupport: true,
          helpCenter: false
        },
        {
          free: false,
          price: 12,
          users: 15,
          space: 3,
          emailSupport: true,
          helpCenter: false
        },
        {
          free: false,
          price: 19,
          users: 30,
          space: 5,
          emailSupport: true,
          helpCenter: true
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
