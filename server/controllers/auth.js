const passport = require("passport")
const validator = require("validator")
const User = require("../models/User")
require("dotenv").config({path: "./config/.env"})

const REDIRECT_ROUTES = {
  login: `${process.env.FRONTEND_URI}/login`,
  signup: `${process.env.FRONTEND_URI}/signup`,
  logout: `${process.env.FRONTEND_URI}/logout`,
  home: `${process.env.FRONTEND_URI}/`,
};

exports.postLogin = (req, res, next) => {
  console.log("POST LOGIN")
  const validationErrors = [] // Placeholder for inputting error messages
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: "Please enter a valid email address." })
  if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: "Password cannot be blank." })

  // If there is an error, redirect back to the login page
  if (validationErrors.length) {
    return res.json({ 
      redirect: REDIRECT_ROUTES.login,
      errors: validationErrors,
    })
  }

  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

  passport.authenticate("local", (err, user) => {
    if (err) { return next(err) }
    if (!user) {
      return res.json({
        redirect: REDIRECT_ROUTES.login,
        errors: ["Invalid credentials"],
      })
    }

    req.logIn(user, (err) => {
      if (err) { return next(err) }
      res.json({ redirect: REDIRECT_ROUTES.home })
    })
  })(req, res, next)
}

// Logs out the user
exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    // Destroy cookies?
    req.session.destroy((err) => {
      if (err) {
        console.log("Error : Failed to destroy the session during logout.", err);
      }
      req.user = null;
      res.json({ redirect: REDIRECT_ROUTES.home });
    });
  });
};

exports.postSignup = async (req, res, next) => {
  try {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
    if (!validator.isLength(req.body.password, { min: 8 }))
      validationErrors.push({ msg: "Password must be at least 8 characters long" });
    if (req.body.password !== req.body.confirmPassword)
      validationErrors.push({ msg: "Passwords do not match" });

    if (validationErrors.length) {
      return res.json({ redirect: REDIRECT_ROUTES.signup }); 
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });

    const existingUser = await User.findOne({
      $or: [
        { email: req.body.email },
        { userName: req.body.userName },
      ],
    }).exec();

    if (existingUser) {
      req.flash("errors", {
        msg: "Account with that email address or username already exists.",
      });
      return res.json({ redirect: REDIRECT_ROUTES.signup });
    }

    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      res.json({ redirect: REDIRECT_ROUTES.home });
    });
  } catch (err) {
    return next(err);
  }
};
