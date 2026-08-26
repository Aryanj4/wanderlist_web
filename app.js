const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wander_list";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  //after sending a GET request to /, respond with msg.
  res.send("Hi, I am root");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My new villa",
    description: "By the beach",
    price: 1200,
    location: "Lost Street Abu Dhabi",
    country: "Dubai",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("Successful testing");
});

app.listen(8080, () => {
  //Start the server and listen for requests on port 8080.
  console.log("Server is listening on port : 8080");
});
