<template>
  <div class="container-fluid">
    <header class="row">
      <div class="col-xs-12">
        <marquee class="wow"><h1>Vallilan lounasravintolat</h1></marquee>
      </div>
    </header>
    <div><small>Sisältö on noudettu ravintoloiden nettisivuilta automaattisesti. Virheitä sattuu.</small></div>
    <main class="row">
      <article v-for="(r, index) in lunchMenus" class="col col-12 col-sm-6 col-lg-4">
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

export default {
  data() {
    return {
      lunchMenus: [],
      restaurants: ['antell-vaaksy', 'africanpots','alice', 'harju8', 'kellohalli', 'rocks', 'rupla', 'sture4'],
    }
  },
  beforeMount(){
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.restaurants.forEach((r) => {
        let path = "/";
        process.env.NODE_ENV === 'production'? path = "/pitskulounas/" : "/";
        let i = 0;
        this.$http.get(`${path}static/crawled/${r}.json`).then((res) => {
          const content2 = this.sanitizeTxt(get(res.data[0], 'content_2', ''))
          this.lunchMenus.push({
            html: `${this.sanitizeTxt(res.data[0].content_1)} ${content2}`, 
            name: r
          });
        });
      });
    },
    sanitizeTxt(str){
      const dayInt = 1// new Date().getDay();
      const days = {1:"Maanantai",2:"Tiistai",3:"Keskiviikko",4:"Torstai",5:"Perjantai",6:"Lauantai"}

      const daysRe = new RegExp(days[dayInt], 'i')

      str = str.replace(/(maanantai)/i, '<p><strong>Maanantai</strong></p>')
        .replace(/(tiistai)/i, '<p><strong>Tiistai</strong></p>')
        .replace(/(keskiviikko)/i, '<p><strong>Keskiviikko</strong></p>')
        .replace(/(torstai)/i, '<p><strong>Torstai</strong></p>')
        .replace(/(perjantai)/i, '<p><strong>Perjantai</strong></p>')
        .replace(/(lauantai)/i, '<p><strong>Lauantai</strong></p>')
        .replace(/Ma\s/, '<p><strong>Maanantai</strong></p>')
        .replace(/Ti\s/, '<p><strong>Tiistai</strong></p>')
        .replace(/Ke\s/, '<p><strong>Keskiviikko</strong></p>')
        .replace(/To\s/, '<p><strong>Torstai</strong></p>')
        .replace(/Pe\s/, '<p><strong>Perjantai</strong></p>')
        .replace(/La\s/, '<p><strong>Lauantai</strong></p>')

      const splitStr = str.split(daysRe);
      str = get(splitStr,'[1]')? `<p><strong>${days[dayInt]}</strong></p>${splitStr[1]}` : str;

      return str.replace(/\d+\.\d+\.?/g, '')
        .replace(/\s+–\s+/g, '<br>')
        .replace(/\n\n+/g, '<br>')
        .replace(/\)\s?([A-Z])/g, ')<br>$1')
        .replace(/\s\s+/g, ' ')
    }


  }
}
</script>

<style scoped>
h1, h2, h3 {
  margin: 0;
  margin-bottom: 0.5em;
}

h3 {
  text-transform: uppercase;
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

marquee {
  width: 100%;
  padding-top: 1.4em;
}

.card {
  padding: 2em;
  border: 3px solid black;
  box-shadow: 9px 9px 0 0 rgba(0,0,0,0.1);
}

.col {
  padding: 1em 1em;
}

.wow {
  animation: wow-animation 1s infinite;
  transform: scale(1);
  animation-direction: alternate;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  text-shadow: none;
  color: darkcyan;

}
@keyframes wow-animation {
  to {
    color: #ff00ff;
    transform: scale(1.2);
    transform: rotate(359.3deg);
    transform-origin: center left;
    text-shadow:4px 4px 3px #FFFF00, -4px -4px 4px #FF00FF;

  }
}

</style>
