// Create web server
// Create a web server that listens for incoming requests and serves the comments.html file. 
// The server should listen on port 8080.

// Import the http module
const http = require('http');
// Import the fs module
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response status code and header
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // Read the comments.html file
  fs.readFile('./comments.html', (err, data) => {
    if (err) {
      // Set the response status code
      res.writeHead(404);
      // Set the response content type
      res.writeHead('text/html');
      // Send the response
      res.end('404 Not Found');
    } else {
      // Send the response
      res.end(data);
    }
  });
});

// Listen for incoming requests
server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
