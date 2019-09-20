<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from '@/main';
import styles from './assets/flexbox.css'
import normalize from './assets/normalize.css'


export default {
  name: 'app',
}
</script>

<style>
#app {
	max-width: 1600px;
margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
