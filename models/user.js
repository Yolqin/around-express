const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^https?:\/\/(www\.)?([^/]+)(\/[a-z\d._~:/?%#[\]@!$&'()*+,;="-]*)?/gi.test(v),
      message: (props) => `${props.value} is not a valid URL!`,
    },
    // ^https?:\/\/(www\.)?([^\/]+)(\/[a-z\d._~:\/?%#\[\]@!$&'()*+,;="-]*)? checked regex101
  },
});

module.exports = mongoose.model('user', userSchema);
