'use strict';

const css = require('css');
const files = require('./files');

function parseFile(filePath) {
  const cssFileContent = getFileContent(filePath);

  return css.parse(cssFileContent, {
    silent: false,
    source: filePath
  });
}

function stringifyAST(ast) {
  const output = css.stringify(ast, { sourcemap: true });

  files.save('foo.css', output.code);
}

module.exports = {
  parse: parseFile,
  stringify: stringifyAST
}
