const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const phones = require('./phones.json')



app.use(cors())

app.get('/', (req, res)=> {
    res.send('Hello world')
})


app.get('/phones', (req, res) => {
    res.send(phones)
})


app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})


app.listen(port, () => {
    console.log(`My app is running on port ${port}`)
})