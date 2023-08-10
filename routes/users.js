import express from "express";
import { handleAsync } from "../utils/handleAcync.js";
import passport from "passport";
import { UsersCotroller } from "../controllers/users.js";

export const router = express.Router();

// register routes
router
  .route("/register")
  .get(UsersCotroller.registerForm)
  .post(handleAsync(UsersCotroller.register));

// login routes
router
  .route("/login")
  .get(UsersCotroller.loginForm)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
      keepSessionInfo: true,
    }),
    UsersCotroller.login
  );

// logout route
router.get("/logout", UsersCotroller.logout);
