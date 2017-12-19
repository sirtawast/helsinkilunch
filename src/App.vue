<template>
  <div id="app">
    <div v-for="r in restaurants">
      <h1>{{ r }}</h1>
      <div v-html="menus[r]"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from '@/main';

export default {
  name: 'app',
  data() {
    return {
      menus: [],
      restaurants: ['taste','valimotie9', 'variantti', 'kanttiini', 'blancco', 'factory'],
    }
  },
  beforeMount(){
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.restaurants.forEach((r) => {

        this.$http.get(`/static/crawled/${r}.json`).then((res) => {
          this.menus[r] = res.data.html;
          console.log(r, this.menus);

       });
      })


    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
  margin-left: 40px;
  right-left: 40px;

}
</style>
