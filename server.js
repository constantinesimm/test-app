const fs = require('fs');
const path = require('path');
const express = require('express');

const server = express();
const indexFile = path.join(__dirname, './dist/index.html');

//static path
server.use(express.static(path.join(__dirname, './dist')));

//send index.html
server.get('*', (request, response) => {
    fs.stat(indexFile, (error, stats) => response.set({ 'Content-Type': 'text/html; charset=utf-8', 'Content-Length': stats.size }));

    fs.createReadStream(indexFile).pipe(response);
});


server.listen(process.env.PORT || '3000', () => console.log(`Server is started at port ${ process.env.PORT || '3000' }`));
