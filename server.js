const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, 'build')));
app.use('/project', express.static(path.join(__dirname, 'build')))
app.use('/meeting', express.static(path.join(__dirname, 'build')))
app.use('/fellowship', express.static(path.join(__dirname, 'build')))
app.use('/home', express.static(path.join(__dirname, 'build')))

app.listen(port, () => console.log("Listening on Port", port)) 