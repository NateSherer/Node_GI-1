const request = require('request')

const forecast = (latitude, longitude, unit, callback) => {
const url = 'https://api.weatherstack.com/current?access_key=d0e16b0896a8356560529f1c89f52159&query=' + latitude + ',' + longitude + '&units=' + unit;

request({url: url, json: true}, (error,{body}) => {
    let units = unit === 'm' ? 'C': unit === 's' ? 'K': 'f'; 

    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + units + " degrees out. It feels like " + body.current.feelslike + units + " degrees out.")
    }
})
}

module.exports = forecast