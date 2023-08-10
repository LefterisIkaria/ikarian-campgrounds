import { Campground } from "./models/campground.js";
import { Review } from "./models/review.js";

export const isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    const { originalUrl } = req;
    req.session.returnTo = originalUrl;
    req.flash("error", "You must be signed-in first");
    return res.redirect("/login");
  }

  next();
};

export const isAuthorizedCamp = async (req, res, next) => {
  const { id } = req.params;
  const camp = await Campground.findById(id);

  const isOwner = camp.author.equals(req.user._id);
  if (!isOwner) {
    req.flash("error", "Not authorized to do that!");
    return res.redirect("/");
  }

  next();
};

export const isAuthorizedReview = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);

  const isOwner = review.author.equals(req.user._id);
  if (!isOwner) {
    req.flash("error", "Not authorized to do that!");
    return res.redirect(`/campgrounds/${id}`);
  }

  next();
};
