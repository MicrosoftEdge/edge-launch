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

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
