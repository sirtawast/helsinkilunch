<template>
  <div class="container-fluid">
    <header class="row">
      <div class="col-xs-12">
        <marquee class="wow"><h1>Vallilan lounasravintolat</h1></marquee>
      </div>
    </header>
    <div><small>Sisältö on noudettu ravintoloiden nettisivuilta automaattisesti. Virheitä sattuu.</small></div>
    <main class="row">
      <article v-for="(menu, index) in orderedLunchMenus" class="col col-12 col-sm-6 col-lg-4">
        <div class="card">
          <h3>{{ menu.name }}</h3>
          <div v-html="menu.html"></div>
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
      areaRestaurants: this.restaurants.vallila,
      lunchMenus: [],
    }
  },
  beforeMount(){
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

  }
}
</script>

