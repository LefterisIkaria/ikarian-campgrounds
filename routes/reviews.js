import express from "express";
import { isAuthenticated, isAuthorizedCamp, isAuthorizedReview } from "../middleware.js";
import { ReviewsController } from "../controllers/reviews.js";
import { handleAsync } from "../utils/handleAcync.js";
import { validateReview } from "../validations/validations.js";

export const router = express.Router({ mergeParams: true });

// create a new review
router.post("/", validateReview, isAuthenticated, handleAsync(ReviewsController.create));

// delete review
router.delete(
  "/:reviewId",
  isAuthenticated,
  isAuthorizedReview,
  handleAsync(ReviewsController.remove)
);
