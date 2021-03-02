const path = require('path');

const pathToData = path.join(__dirname, '..', 'data', 'users.json');
const getFileContent = require('../helpers/getFileContent');

function getUsers(req, res) {
  return getFileContent(pathToData)
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => { // tutor suggested to omit err
      res.status(500).send({ message: 'Requested resource not found' });
    });
}

function getSingleUser(req, res) {
  return getFileContent(pathToData)
    .then((users) => {
      // eslint-disable-next-line no-shadow
      const user = users.find((user) => user.id === req.params.id);

      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    });
}
module.exports = {
  getUsers,
  getSingleUser,
};
