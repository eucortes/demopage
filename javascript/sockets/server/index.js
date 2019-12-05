const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static("client"));

app.get("/hola-mundo", function(req, res) {
    res.status(200).send("Hola mundo");
});

var messages = [{
    id: 1,
    text: "bienvenido al chat privado de Edgar",
    nickname: "Bot - Edgar"
}];

io.on("connection", function(socket) {
    console.log("el nodo " + socket.handshake.address + " se ha conectado");
    socket.emit("messages", messages);
    socket.on('add-message', function(data) {
        messages.push(data)
        io.sockets.emit('messages', messages)
    })
});
server.listen(6677, function() {
    console.log("el servidor está funcionando en http://localhost:6677");
});