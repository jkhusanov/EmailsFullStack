module.exports = (req, res, next) => {
  if (!req.user) {
    // If a user is not signed in throw an error
    return res.status(401).send({ error: 'You must log in!' });
  }

  // If the user is logged in, sending request to next middleware or simply continue
  next();
};
