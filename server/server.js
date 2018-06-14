const express = require('express')
const path = require('path')

const pub = path.join(__dirname, '..', 'public')
const app = express()

app.use(express.static(pub))
.get('*', (req, res) => { res.sendFile(path.join(pub, 'index.html'))})

app.listen(3000, () => {
    console.log('serving on port 3000')
})
