[![Build Status](https://travis-ci.org/sirtawast/helsinkilunch.svg?branch=master)](https://travis-ci.org/sirtawast/helsinkilunch)

# helsinkilunch

_**CENTRAL HKI, PITÄJÄNMÄKI AND VALLILA – THE CULINARY EXPERIENCE**_

Kaikki lempiravintolasi lounaslistat keskustassa, Pitäjänmäellä ja Vallilassa.

Very quick hack. Steal some restaurant lunch menus and paste them as HTML for one long list of delicacy.

[See what's on the menu](https://sirtawast.github.io/helsinkilunch)!

---

# How to use

Install node >= 8, clone repo.

## Crawl the sites

```bash
npm install

node vallila.js

npm run crawl
```

## Build Setup for frontend

```bash

npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

---

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
