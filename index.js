const express = require('express')
const serveStatic = require('serve-static')

const app = express()

app.use(serveStatic('static/', {'index': ['index.html']}))
app.listen(3000)