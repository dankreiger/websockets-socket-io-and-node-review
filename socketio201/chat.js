const express = require('express');
const app = express();
const socketio = require('socket.io');

const printListening = () => {
  const url = `http://localhost:${expressServer.address().port}`;
  console.log('\x1b[36m%s\x1b[0m', `\nListening now on: ${url}\n`);
};

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000, printListening);
const io = socketio(expressServer);
io.on('connection', socket => {
  socket.emit('messageFromServer', { data: 'Welcome to the socketio server' });
  socket.on('messageToServer', dataFromClient => {
    console.log(dataFromClient);
  });
  socket.on('newMessageToServer', msg => {
    io.emit('messageToClients', { text: msg.text });
    // shorthand for io.of('/').emit('messageToClients', { text: msg.text });
  });
});

io.of('/admin').on('connection', socket => {
  console.log('Someone connected to the admin namespace');
  io.of('/admin').emit('welcome', 'Welcome to the admin channel!');
});
