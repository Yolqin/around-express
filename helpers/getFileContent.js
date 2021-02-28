const fs = require('fs').promises;

function getFileContent(path) {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then(JSON.parse)
    // eslint-disable-next-line no-undef
    .catch(next);
}

module.exports = getFileContent;
