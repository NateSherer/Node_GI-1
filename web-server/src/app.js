const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const port = process.env.port || 3006
const app = express()

//Define Paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join (__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Nate Sherer'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Nate Sherer'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Nate Sherer'
    })
})


// app.get('/', (req, res) => {
//     res.send('Welcome to the homepage');
// })


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send ({
            error: 'You must provide an address!'
        })
    }
    const unit = req.query.unit || 'f';

    geocode(req.query.address, (error,{ latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({error})
        }

        const unit = req.query.units || 'f';


        forecast(latitude, longitude, unit, (error, forecastData) => {


            if(error) {
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location, 
                address: req.query.address,
                unit
            })
        })
    })


})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }


    console.log(req.query.search)
    res.send ({
        products: []
    })
})

app.get('/help/*', (req, res) => {
res.render('404', {
    title: '404',
    name: 'Nate Sherer',
    errorMessage: 'Help article not found.'
    })
})

// "*"" means connect to anything that hasn't been connected yet
app.get('*', (req, res) => {
res.render('404', {
    title: '404',
    name: 'Nate Sherer',
    errorMessage: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port' + port)
})