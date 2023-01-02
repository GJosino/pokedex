import express from 'express'
import path from 'path'

const __dirname = path.resolve();

const app = express()

app.use(express.static('public'));




app.get('/pokemon', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/pokedex', (req, res) => {
    res.sendFile(__dirname + '/pokedex.html')
})






app.listen(3000, () => {
    console.log("Escutando porta 3000")
})

