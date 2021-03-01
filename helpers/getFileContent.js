const fs = require('fs').promises;

function getFileContent(path) {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then(JSON.parse); // tutor suggested to place a catch block on my function calls
}

module.exports = getFileContent;
