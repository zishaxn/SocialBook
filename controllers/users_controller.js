module.exports.user = function (req, res) {
  return res.render('user', {
    title: 'SocialBook User Section',
    user:'zishan',
  })
};
