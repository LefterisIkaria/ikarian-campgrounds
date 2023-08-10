import { Review } from "../models/review.js";
import { Campground } from "../models/campground.js";

const create = async (req, res) => {
  const { id } = req.params;
  const { review } = req.body;

  const camp = await Campground.findById(id);
  const newReview = await new Review(review);
  newReview.author = req.user._id;

  camp.reviews.push(newReview);

  await camp.save();
  await newReview.save();

  req.flash("success", "You created a new review!");
  res.redirect(`/campgrounds/${camp._id}`);
};

const remove = async (req, res) => {
  const { id, reviewId } = req.params;

  await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review deleted successfully!");
  res.redirect(`/campgrounds/${id}`);
};

export const ReviewsController = {
  create,
  remove,
};
