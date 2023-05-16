const express = require('express')
const cors = require('cors')
const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller')


const app = express()


app.use(express.json())
app.use(cors())

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)



app.listen(4004, () => console.log('Running on port 4004'))