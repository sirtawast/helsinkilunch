const express = require('express')
const serveStatic = require('serve-static')
const compression = require('compression')

const app = express()

app.use(compression());

app.use(serveStatic('static/', {'index': ['index.html']}))
app.listen(3000)