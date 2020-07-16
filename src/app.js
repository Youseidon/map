const express = require('express')
const mapRouter = require('./routers/map')
const path = require('path')
const hbs = require('hbs')

const app = express();

const dirStaticPath = path.join(__dirname, '../public')
const viewDirectory = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewDirectory)
hbs.registerPartials(partialPath);

app.use(express.static(dirStaticPath))
app.use(express.json())
app.use(mapRouter)

module.exports = app;