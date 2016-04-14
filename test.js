var edge_launch = require('./index.js')

edge_launch('http://kenneth.io', {}, function(err) {
    console.log('callback', arguments)
})