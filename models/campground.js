import mongoose from "mongoose";
import { Review } from "./review.js";

const { Schema } = mongoose;

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

ImageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});

const opts = { toJSON: { virtuals: true } };

const CampgroundSchema = new Schema(
  {
    title: String,
    images: [ImageSchema],
    price: Number,
    description: String,
    location: String,
    geometry: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
        default: [],
      },
    ],
  },
  opts
);

CampgroundSchema.virtual("properties.popUpMarkUp").get(function () {
  return `<a href="/campgrounds/${this._id}"> ${this.title} </a>`;
});

CampgroundSchema.post("findOneAndDelete", async function (doc) {
  if (!doc) return;
  await Review.deleteMany({ _id: { $in: doc.reviews } });
});

export const Campground = mongoose.model("Campground", CampgroundSchema);
