var db = require("../models");

module.exports = function(app, passport) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });

  //questionaire
  app.get("/questionaire", function(req, res) {
    res.render("questionaire", {
      msg: "Welcome!"
    });
  });

  // Load example page and pass in an example by id
  app.get("/matches/:id", function(req, res) {});

  // Browse all possible matches
  app.get("/browse", function(req, res) {
    res.render("browse", {
      msg: "Welcome!",
      examples: dbExamples
    });
  });

  //signup page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/signupLink", function(req, res) {
    res.render("signup");
  });

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboardLink",
      failureRedirect: "/signupLink"
    })
  );

  app.get("/dashboardLink", function(req, res) {
    app.render("dashboard");
  });

  app.get("/dashboard", isLoggedIn, function(req, res) {
    app.render("dashboard");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
};
