var https = require('https');

function getAndPrintHTML (options) {


  https.get(options, function (response) {
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
 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);