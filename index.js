const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const port = 3000;

app.get('/',(req,res) => {
    res.send('<h1>Hi</h1>');
});

io.on('connection', (socket) => {
    console.log("A user is connected");
    socket.on('disconnect', () => {
        console.log("User is disconnected");
    });
});

server.listen(port, () => {
    console.log("listening on port 3000");
});

