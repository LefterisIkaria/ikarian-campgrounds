import { User } from "../models/user.js";

const registerForm = (req, res) => {
  res.render("users/register");
};

const register = async (req, res) => {
  try {
    const { user: userData, check } = req.body;
    const newUser = new User({ email: userData.email, username: userData.username });
    const user = await User.register(newUser, userData.password);

    req.login(user, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to Ikarian Campgrounds!");
      res.redirect("/campgrounds");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/register");
  }
};

const loginForm = (req, res) => {
  res.render("users/login");
};

const login = (req, res) => {
  req.flash("success", "Welcome Back!");
  const redirectUrl = req.session.returnTo || "/";
  delete req.session.returnTo;

  res.redirect(redirectUrl);
};

const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "See ya!");
    res.redirect("/");
  });
};

export const UsersCotroller = {
  registerForm,
  register,
  loginForm,
  login,
  logout,
};
