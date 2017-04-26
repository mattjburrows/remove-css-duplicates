'use strict';

const fs = require('fs');

function getContent(filePath) {
  return fs.readFileSync(filePath).toString();
}

function saveFile(location, content) {
  fs.writeFileSync(location, content);
}

module.exports = {
  get: getContent,
  save: saveFile
};
