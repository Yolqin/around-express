const Card = require('../models/card');

function getCards(req, res) {
  return Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(() => { // tutor suggested to omit err
      res.status(500).send({ message: 'Requested resource not found' });
    });
}

const createCard = (req, res) => {
  const { name, link } = req.body;
  return Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch(() => {
      res.status(400).send({ message: 'Invalid data passed to the methods for creating a card/user or updating a user\'s avatar/profile' });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card) {
        return res.status(200).send({ message: 'Card Deleted' });
      }
      return res.status(404).send({ message: 'Card not found' });
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (card) {
        return res.status(200).send({ message: 'Card Deleted' });
      }
      return res.status(404).send({ message: 'Card not found' });
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (card) {
        return res.status(200).send({ message: 'Card Deleted' });
      }
      return res.status(404).send({ message: 'Card not found' });
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
