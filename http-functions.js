module.exports = function getHTML (options, callback) {


var https = require('https');

  https.get(options, function (response) {
  var body = '';

   response.setEncoding('utf8');

   response.on('data', function (data) {
    body += data + '\n';
    callback(body);

   })

   response.on('end', function() {
     return body;
   })

  })
};


function printHTML (html) {
  console.log(html);
}



