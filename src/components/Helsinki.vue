<template>
  <div class="hello">
    <div class="container-fluid">
      <aside class="row">
        <div class="col-12">
          <p>
            Go to: <strong>{{ randomLunchPlace }}</strong>
          </p>
          <p>
            Wait, that's a
            <span class="btn btn-primary" v-on:click="onRandomClick"
              >horrible idea</span
            >
          </p>
          <p style="font-weight: 600; color: hotpink;" v-if="!isFirstPick">
            RESULT HAS BEEN MANIPULATED!
          </p>
          <hr />
        </div>
      </aside>
    </div>

    <div class="container-fluid">
      <header class="row">
        <div class="col-xs-12">
          <marquee class="wow"><h1>Keskustan lounasravintolat</h1></marquee>
        </div>
      </header>
      <div>
        <small
          >Sisältö on noudettu ravintoloiden nettisivuilta automaattisesti.
          Virheitä sattuu.</small
        >
      </div>
      <main class="row">
        <article
          v-for="(r, index) in orderedLunchMenus"
          class="col col-12 col-sm-6 col-lg-4"
        >
          <div class="card">
            <h3>{{ r.name }}</h3>
            <div v-html="r.html"></div>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import get from 'lodash.get';
import orderBy from 'lodash.orderby';
import { sanitizeTxt } from '../utils';
import singles from '../../lib/singles.js';

export default {
  props: ['restaurants'],
  data() {
    return {
      places: singles,
      lunchMenus: [],
      randomLunchPlace: '',
      areaRestaurants: this.restaurants.helsinki,
      availableLunchPlaces: [],
      isFirstPick: true,
    };
  },
  beforeMount() {
    this.fetchData();
    // this.newRandomPlace();
  },
  computed: {
    orderedLunchMenus: function() {
      return orderBy(this.lunchMenus, 'name');
    },
  },
  methods: {
    onRandomClick() {
      this.isFirstPick = false;
      this.newRandomPlace();
    },
    newRandomPlace() {
      if (this.availableLunchPlaces.length === 0) {
        this.availableLunchPlaces = [...this.places];
      }
      const i = this.randomRange(0, this.availableLunchPlaces.length);
      this.randomLunchPlace = this.availableLunchPlaces[i].name;
      this.availableLunchPlaces.splice(i, 1);
    },
    randomRange(min, max) {
      return parseInt(Math.random() * (max - min) + min, 10);
    },
    fetchData() {
      this.areaRestaurants.forEach(r => {
        const path =
          process.env.NODE_ENV === 'production' ? '/helsinkilunch/' : '/';

        this.$http.get(`${path}static/crawled/${r.slug}.json`).then(res => {
          const content = get(res.data, '[0].content', '');
          // If content is array, flatten it to string with concat
          const contentHtml = Array.isArray(content)
            ? content.join('<br>')
            : content;

          this.lunchMenus.push({
            name: r.slug,
            html: `${sanitizeTxt(contentHtml)}`,
          });
        });
      });
    },
  },
};

window.Array.prototype.insert = function(index, item) {
  this.splice(index, 0, item);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
aside {
  display: none;
  position: fixed;
  background: #333;
  color: white;
  right: 0;
  top: 150px;
  padding: 3rem;
}
.btn {
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  border-radius: 0;
  cursor: pointer;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.15);
  user-select: none;
}
.btn:active {
  background: rebeccapurple;
  color: white;
  border-color: rebeccapurple;
}
</style>
