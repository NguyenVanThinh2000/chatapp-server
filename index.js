const cors = require("cors");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const PORT = 3001;

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id}: connected`);

  socket.on("join-room", (request) => {
    console.log(request);
    socket.join(request.data.id);
  });

  socket.on("on-send", (request) => {
    console.log(request);
    io.to(request.data.roomId).emit("on-receive", request);
  });
});

server.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
