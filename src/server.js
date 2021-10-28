var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
  socket.on('sendMessage', (message) => {
    console.log('Message has been sent: ', message);
    io.emit('receiveMessage', message);
  });
});
