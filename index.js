require("dotenv").config();
const cors = require("cors");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const route = require("./src/routes");

const db = require("./src/config/db");
db.connect();

const app = express();
app.use(cors());

const server = http.createServer(app);

// Route init
route(app);

// using socket.io
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`${socket.id}: connected`);

//   socket.on("join-room", (request) => {
//     console.log(request);
//     socket.join(request.data.id);
//   });

//   socket.on("on-send", (request) => {
//     console.log(request);
//     io.to(request.data.roomId).emit("on-receive", request);
//   });
// });

server.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT}`);
});
