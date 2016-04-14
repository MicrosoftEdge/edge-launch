var urlparse = require('url').parse
var urlformat = require('url').format
var child_process = require('child_process')

var EDGE_COMMAND = [
  'powershell',
  'start',
  'shell:AppsFolder\\Microsoft.MicrosoftEdge_8wekyb3d8bbwe!MicrosoftEdge'
]

function launch(url, options, callback) {
    if(options) {
       options = Object.keys(options).map(function (key) {
         return '--' + key + ' ' + options[key]
       })
    } else {
      options = []
    }
    
    // URL formatting
    var urlObj = urlparse(url, true)
    delete urlObj.search   // url.format does not want search attribute
    url = urlformat(urlObj)
    
    // Fire up process
    var command = EDGE_COMMAND.concat(url).concat(options).join(' ')
    var cmd = child_process.exec(command, callback)
   
    return cmd
}

module.exports = launch