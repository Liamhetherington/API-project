var https = require('https');

function getAndPrintHTML (callback) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

  var body = '';

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    body += data + '\n';
    console.log(body);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  })

})


}
getAndPrintHTML();