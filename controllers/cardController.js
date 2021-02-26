const path = require('path');

const getFileContent = require('../helpers/getFileContent');

const pathToData = path.join(__dirname, '..', 'data', 'cards.json');

function getCards(req, res) {
  return getFileContent(pathToData)
    .then((cards) => {
      res.status(200).send(cards);
    });
}

module.exports = getCards;
