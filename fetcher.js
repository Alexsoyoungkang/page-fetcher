// It should take two command line arguments:

// a URL
// a local file path

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(filePath, body, error => {
    if (error) {
      console.log(error);
    } else {
      fs.stat(filePath, (error, stats) => {
        if (error) {
          console.log(error);
        } else {
          //console.log(body);
          console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}`);
        }
      });
    }
  });
});