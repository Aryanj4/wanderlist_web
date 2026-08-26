const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wander_list';

main().then(() => {
    console.log("connected to DB");
}).catch(() => {
    console.log("failed to connect" + err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => { //after sending a GET request to /, respond with msg.
    res.send("Hi, I am root");
});

app.listen(8080, () => {  //Start the server and listen for requests on port 8080.
    console.log("Server is listening on port : 8080");
});