const mongoose = require("mongoose");

const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wander_list";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("failed connection with DB" + err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data); //data.js is returning object
  console.log("data was initialized");
}

initDB();