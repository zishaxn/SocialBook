// we need to export a function that is publically available to our routers
module.exports.home = function (req, res) {
  return res.render("home", {
    title: "SocialBook",
    h1: "Welcome to SocialBook",
  });
};
