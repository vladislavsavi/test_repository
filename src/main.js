
const express = require('express')
const fibonacci = require('./fibonacci').fibonacci
const app = express()
const port = 3000

app.get('/fibonacci', (req, res) => {
    const { number } = req.query;
    if (number.toString()) {
        const result = fibonacci(number);
        res.send(`Fibonacci number ${number} = ${result}`);
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})