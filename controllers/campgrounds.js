import { Campground } from "../models/campground.js";
import { v2 as cloudinary } from "cloudinary";
import Geocoding from "@mapbox/mapbox-sdk/services/geocoding.js";
import { mapboxConfig } from "../config.js";

const geocodingClient = new Geocoding({ accessToken: mapboxConfig.token });

const index = async (req, res) => {
  const allCampgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds: allCampgrounds });
};

const newForm = (req, res) => {
  res.render("campgrounds/new");
};

const show = async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("author");

  console.log(camp);

  if (camp == null) {
    req.flash("error", "Campground does not exists!");
    return res.redirect("back");
  }

  res.render("campgrounds/show", { camp });
};

const create = async (req, res) => {
  const { campground } = req.body;

  const geoData = await geocodingClient
    .forwardGeocode({
      query: campground.location,
      limit: 5,
    })
    .send();
  console.log(geoData.body.features);
  const camp = new Campground(campground);
  camp.geometry = geoData.body.features[0].geometry;
  camp.author = req.user._id;
  camp.images = req.files.map((file) => ({ url: file.path, filename: file.filename }));
  await camp.save();

  console.log(camp);

  req.flash("success", "succesfully made a new Campground!");
  res.redirect(`/campgrounds/${camp._id}`);
};

const editForm = async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findById(id);

  res.render("campgrounds/edit", { camp });
};

const update = async (req, res) => {
  const { id } = req.params;
  const { campground } = req.body;
  const query = { ...campground };
  const camp = await Campground.findByIdAndUpdate(id, query, { new: true });
  const images = req.files.map((file) => ({ url: file.path, filename: file.filename }));
  camp.images.push(...images);

  const geoData = await geocodingClient
    .forwardGeocode({
      query: campground.location,
      limit: 1,
    })
    .send();

  camp.geometry = geoData.body.features[0].geometry;
  await camp.save();

  const { deleteImages } = req.body;
  if (deleteImages) {
    deleteImages.forEach((filename) => {
      cloudinary.uploader.destroy(filename);
    });
    await camp.updateOne({ $pull: { images: { filename: { $in: deleteImages } } } });
  }

  req.flash("success", "succesfully updated campground!");
  res.redirect(`/campgrounds/${camp._id}`);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findByIdAndDelete(id);

  req.flash("success", "campground succesfully deleted!");
  res.redirect("/campgrounds");
};

export const CampsController = {
  index,
  newForm,
  show,
  create,
  editForm,
  update,
  remove,
};
