const program = require('commander');

const pkg = require('./package.json');

program
  .version(pkg.version)
  .option('-i, --input', 'The input file / directory')
  .option('-o, --output', 'The output file')
  .option('-m, --minify', 'Minify the output')
  .option('-s, --sourcemaps', 'Include source maps')
  .parse(process.argv);

if (!program.args.length) program.help();
