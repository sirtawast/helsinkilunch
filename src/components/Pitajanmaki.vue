<template>
  <div class="container-fluid">
    <header class="row">
      <div class="col-xs-12">
        <marquee class="wow"><h1>Pitäjänmäen lounasravintolat</h1></marquee>
      </div>
    </header>
    <div>
      <small
        >Sisältö on noudettu ravintoloiden nettisivuilta automaattisesti.
        Virheitä sattuu.</small
      >
    </div>
    <main class="row">
      <article v-for="(r, index) in orderedLunchMenus" class="col col-12 col-sm-6 col-lg-4">
        <div class="card">
          <h3>{{ r.name }}</h3>
          <div v-html="r.html"></div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import get from 'lodash.get';
import orderBy from 'lodash.orderBy';
import {sanitizeTxt} from '../utils';

export default {
  props: ['restaurants'],
  data() {
    return {
      lunchMenus: [],
      areaRestaurants: this.restaurants.pitajanmaki,
    };
  },
  beforeMount() {
    this.fetchData();
  },
  computed: {
    orderedLunchMenus: function() {
      return orderBy(this.lunchMenus, 'name');
    }
  },
  methods: {
    fetchData() {
      this.areaRestaurants.forEach((r) => {
        const path = process.env.NODE_ENV === 'production'? "/pitskulounas/" : "/";

        this.$http.get(`${path}static/crawled/${r.slug}.json`).then((res) => {
          const content = get(res.data, '[0].content', "")
          // If content is array, flatten it to string with concat
          const contentHtml = Array.isArray(content)? content.join('<br>') : content;

          this.lunchMenus.push({
            name: r.slug,
            html: `${sanitizeTxt(contentHtml)}`,
          });
        });
      });
    },
    sanitizeTxt(str){
      const dayInt = new Date().getDay();
      const days = {1:"Maanantai",2:"Tiistai",3:"Keskiviikko",4:"Torstai",5:"Perjantai",6:"Lauantai"}

      const daysRe = new RegExp(days[dayInt], 'i')

      const splitStr = str.split(daysRe); // Split to past and present, get rid of past
      str = get(splitStr,'[1]')? `<p><strong>${days[dayInt]}</strong></p>${splitStr[1]}` : str;

      return str.replace(/\d+\.\d+\.?/g, '')
        .replace(/(\d)\s+€/g, '$1€')
        .replace(/€([A-Za-z])/g, '€<br>$1')
        .replace(/\d+\.\d+\.?/g, '')
        .replace(/\s+–\s+/g, '<br>')
        .replace(/\)\s?([A-Z])/g, ')<br>$1')
        .replace(/\n\n+/g, '<br>')
        .replace(/\)\s+?([A-Z])/g, ')<br>$1')
        .replace(/\s\s+/g, ' ')
        .replace(/(<br>\n?)+/g, '<br>')
        .replace(/(<br>\s?<br>)+/g, '<br>')
        .replace(/(<\/p>\s+?<br>\s+?\n?)/g, '</p>')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
