<template>
  <div id="app">
    <header id="header-nav">
      <nav>
        <ul>
          <li><router-link to="/"> Helsinki</router-link></li>
          <li><router-link to="/vallila"> Vallila</router-link></li>
          <li><router-link to="/pitajanmaki">Pitäjänmäki</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view />

    <footer>
      <hr />
      <ul>
        <li>
          <a href="https://travis-ci.org/sirtawast/helsinkilunch/"
            ><img
              src="https://travis-ci.org/sirtawast/helsinkilunch.svg?branch=master"
              alt=""
          /></a>
        </li>
        <span>|</span>

        <li>
          <a href="https://github.com/sirtawast/helsinkilunch/">GitHub</a>
        </li>
        <span>|</span>
        <li>
          <a href="https://github.com/sirtawast/helsinkilunch/issues/"
            >Issues</a
          >
        </li>
        <span>|</span>
        <li><a href="https://motley.fi">motley.fi</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Vue from '@/main';
import styles from './assets/flexbox.css';
import normalize from './assets/normalize.css';

export default {
  name: 'app',
};
</script>

<style>
#app {
  max-width: 1600px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

footer ul li {
  display: inline-block;
  vertical-align: middle;
}

#header-nav {
}

h1,
h2,
h3 {
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
  box-shadow: 9px 9px 0 0 rgba(0, 0, 0, 0.1);
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
    text-shadow: 4px 4px 3px #ffff00, -4px -4px 4px #ff00ff;
  }
}
</style>
