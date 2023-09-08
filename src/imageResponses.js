const fs = require('fs'); // get file system module

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(spongegar);
    response.end();
};

module.exports.getSpongegar = getSpongegar;
