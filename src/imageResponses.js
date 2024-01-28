const spongegarURL = './client/spongegar.png';
const fs = require('fs');

const getImage = (request, response) => {
  fs.readFile(spongegarURL, (err, data) => {
    const mimeType = 'image/png';
    response.writeHead(200, { 'Content-Type': mimeType });
    response.end(data);
  });
};

module.exports = { getImage };
