const houses = require('./db.json')
let homeId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
        console.log(houses)
    },

    deleteHouse: (req, res) => {
        const {id: paramID} = req.params
        
        let index = houses.findIndex((houses) => houses.id === +paramID)
        houses.splice(index, 1)

        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body

        houses.push({
            id: homeId,
            address,
            price: +price,
            imageURL
        })
        homeId++

        res.status(200).send(houses)
    },

    updateHouse: (req, res) => {
        const {type} = req.body
        const {id: paramID} = req.params

        let index = houses.findIndex((houses) => houses.id === +paramID)

    
        if(type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if(type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
    }
}