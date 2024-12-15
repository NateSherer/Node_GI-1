const request = require('request')

const forecast = (latitude, longitude, callback) => {
const url = 'https://api.weatherstack.com/current?access_key=fd1774006ae91b9e2e45708f8804fc67&query=' + latitude + ',' + longitude + '&units=f'

request({url: url, json: true}, (error, response) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
    }
})
}

module.exports = forecast