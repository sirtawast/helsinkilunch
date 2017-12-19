<template>
  <div class="hello">
    <div v-for="(r, index) in menus">
      <h1>{{ r.name }}</h1>
      <div v-html="r.html">r</div>
    </div>
  </div>
</template>

<script>
export default {
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
          this.menus.push({html: res.data.html, name: r});
        });
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
