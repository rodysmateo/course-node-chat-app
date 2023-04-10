const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connectio',(socket) => {
    console.log('New user connectesd');

    socket.on('disconnect', () => {
        console.log('User was disconneted');
    });


});

server.listen(3000, () => {
    console.log(`Server is up on port ${port}`);
});
