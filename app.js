import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import flash from "connect-flash";
import ejsMate from "ejs-mate";
import passport from "passport";
import LocalStrategy from "passport-local";
import methodOverride from "method-override";
import { ExpressError } from "./utils/expressError.js";
import { Routes } from "./routes/routes.js";
import { User } from "./models/user.js";
import * as path from "path";

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/ikarian-camp", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected!");
});

const app = express();

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join("views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join("public")));
app.use(flash());

// session config
app.use(
  session({
    secret: "some-secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 604800000, // 1000 mscs * 60 sec * 60 min * 60 hours * 7 days => week to msecs
      maxAge: 604800000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.loggedInUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/fakeUser", async (req, res) => {
  const newUser = new User({ email: "lolopap21@gmail.com", username: "lefpap" });
  const createdUser = await User.register(newUser, "monkey");
  res.send(createdUser);
});

app.use("/", Routes.users);
app.use("/campgrounds", Routes.campgrounds);
app.use("/campgrounds/:id/reviews", Routes.reviews);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { message = "Something went wrong!", statusCode = 500 } = err;
  res.status(statusCode).render(`error`, { message, statusCode });
});

app.listen(8888, () => {
  console.log("Listening on port 8888");
});
