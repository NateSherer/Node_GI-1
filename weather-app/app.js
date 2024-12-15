// const request = require('request') // Request isn't being used in this file anymore
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        } 
    
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
                return console.log(error)
        }
    
            console.log(data.location)
            console.log(forecastData)
        })
    })
}

console.log(process.argv)

// const url = 'https://api.weatherstack.com/current?access_key=fd1774006ae91b9e2e45708f8804fc67&query=35.227085,%20-80.843124&units=f'

// request({url: url, json: true }, (error, response) => {
// if(error) {
// console.log('Unable to connect to weather service')
// } else if (response.body.error) {
// console.log('Unable to find location')
// } else {
//     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
// }
// }) 




