import mongoose from "mongoose";
import { Campground } from "../models/campground.js";

import { dummy } from "./dummy.js";

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/ikarian-camp", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected!");
});

const rndIndex = (num) => {
  return Math.floor(Math.random() * num);
};

const seedData = async () => {
  for (let i = 0; i < 10; i++) {
    const camp = new Campground({
      author: "63d677a2ecda56f4dfb46f47",
      title: dummy.titles[rndIndex(10)],
      price: dummy.prices[rndIndex(10)],
      description: dummy.descriptions[rndIndex(10)],
      location: dummy.locations[rndIndex(10)].name,
      geometry: {
        type: "Point",
        coordinates: [
          dummy.locations[rndIndex(10)].longitude,
          dummy.locations[rndIndex(10)].latitude,
        ],
      },
    });

    const imgNum = 1 + rndIndex(4);
    for (let i = 0; i < imgNum; i++) {
      camp.images.push(dummy.images[rndIndex(12)]);
    }

    await camp.save();
  }
};

seedData()
  .then(() => {
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
    mongoose.connection.close();
  });
