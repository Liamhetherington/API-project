var https = require('https');

function getAndPrintHTML (options, callback) {


  https.get(options, function (response) {
  var body = '';

  response.setEncoding('utf8');

  response.on('data', function (data) {
    body += data + '\n';
    callback(body);

  });

  response.on('end', function() {
    console.log('Response stream complete.');
  })

})


}
function printHTML (html) {
  console.log(html);
}

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getAndPrintHTML(requestOptions, printHTML);