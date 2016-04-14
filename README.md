# edge-launch
Launcher for Microsoft Edge

## Installation
`npm install edge-launch`

## Usage
```
var edge_launch = require('edge-launch')
var options = {}

edge_launch('http://kenneth.io', options, function(err, strout) {
  console.log('err', err)
})
```

## License

MIT.
