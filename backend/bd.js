const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, world!')
    let list = ['beltrano', 'fulano', 'sicrano']
    list.map(nome => {
            
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})