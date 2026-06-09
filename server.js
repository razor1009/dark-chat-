const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chat message", (data) => {
        io.emit("chat message", data);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

http.listen(3000, () => {
    console.log("Server running on port 3000");
});
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

http.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
