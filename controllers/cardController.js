const path = require('path');

const getFileContent = require('../helpers/getFileContent');

const pathToData = path.join(__dirname, '..', 'data', 'cards.json');

function getCards(req, res) {
  return getFileContent(pathToData)
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(() => { // tutor suggested to omit err
      res.status(404).send({ message: 'Requested resource not found' });
    });
}

module.exports = getCards;
