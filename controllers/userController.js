const User = require('../models/user');

function getUsers(req, res) {
  return User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => { // tutor suggested to omit err
      res.status(500).send({ message: 'Requested resource not found' });
    });
}

function getSingleUser(req, res) {
  return User.find({ _id: req.params.id })
    .then((users) => {
      // eslint-disable-next-line no-shadow
      const user = users.find((user) => user.id === req.params.id);

      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    });
}

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  return User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch(() => {
      res.status(400).send({ message: 'Invalid data passed to the methods for creating a card/user or updating a user\'s avatar/profile' });
    });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  return User.findByIdAndUpdate(
    req.params.id,
    { name, about },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  return User.findByIdAndUpdate(
    req.params.id,
    { avatar },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  updateAvatar,
};
