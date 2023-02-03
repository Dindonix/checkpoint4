const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0] != null) {
        [req.user] = users;

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};
