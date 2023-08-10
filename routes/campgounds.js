import express from "express";
import { handleAsync } from "../utils/handleAcync.js";
import { validateCampground } from "../validations/validations.js";
import { isAuthenticated, isAuthorizedCamp } from "../middleware.js";
import { CampsController } from "../controllers/campgrounds.js";
import multer from "multer";
import { storage } from "../cloudinary/index.js";

const uploader = multer({ storage });

export const router = express.Router();

router
  .route("/")
  .get(handleAsync(CampsController.index)) // index campgrounds
  .post(
    isAuthenticated,
    uploader.array("images"),
    validateCampground,
    handleAsync(CampsController.create)
  ); // create new campground

// form to create new campground
router.get("/new", isAuthenticated, CampsController.newForm);

router
  .route("/:id")
  .get(handleAsync(CampsController.show)) // details for a campground
  .put(
    isAuthenticated,
    isAuthorizedCamp,
    uploader.array("images"),
    validateCampground,
    handleAsync(CampsController.update) // update a campground
  )
  .delete(isAuthenticated, isAuthorizedCamp, handleAsync(CampsController.remove)); // delete a campground

// form to edit a campground
router.get("/:id/edit", isAuthenticated, isAuthorizedCamp, handleAsync(CampsController.editForm));
