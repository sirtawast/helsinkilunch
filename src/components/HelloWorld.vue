<template>
  <div class="container-fluid">
    <header class="row">
      <div class="col-xs-12">
        <marquee class="wow"><h1>Pitäjänmäen lounasravintolat</h1></marquee>
      </div>
    </header>
    <div><small>Sisältö on noudettu ravintoloiden nettisivuilta automaattisesti. Virheitä sattuu.</small></div>
    <main class="row">
      <article v-for="(r, index) in menus" class="col col-12 col-sm-6 col-lg-4">
        <div class="card">
          <h3>{{ r.name }}</h3>
          <div v-html="r.html"></div>
        </div>
      </article>
  </main>
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
        let path = "/";

        if (process.env.NODE_ENV === 'production') {
          path = "/pitskulounas/";
        }

        this.$http.get(`${path}static/crawled/${r}.json`).then((res) => {
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
