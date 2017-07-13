#!/usr/bin/env node

/* eslint-env node */
'use strict';

const ConfTool = require('./lib/conftool'),
  fs = require('fs');

var program = require('commander');

program
  .version('0.0.1')
  .option('-t, --target [value]', 'What should be downloaded? (default: papers)', 'paper')
  .option('-f, --format [value]', 'Output format (default: xml, others: xml_short, csv_comma, csv_semicolon, xls)', 'xml')
  .option('-o, --output [value]', 'Path to output file', 'out')
  .option('-c, --config [value]', 'Path to config file', './config.json')
  .parse(process.argv);

function log(msg) {
  console.log(msg); // eslint-disable-line
}

function writeToFile(data, file) {
  fs.writeFileSync(file, data);
}

function downloadPapers(format, output) {
  let config = require(program.config),
    api = new ConfTool({
      apiKey: config.api_key,
      baseUrl: config.api_base_url
    });
  log('Using format: ' + format);
  log('Trying to download paper data from ' + config.api_base_url);
  api.downloadSubmissions({
    form_export_format: format,
    extended: ['authors_extended', 'authors_extended_presenters', 'authors_extended_columns', 'abstracts', 'session', 'downloads', 'submitter', 'newlines']
  }).then(function(result) {
    log('Finished downloading. Saving output to ' + output);
    writeToFile(result, output);
  });
}

(function run() {
  switch (program.target) {
    case 'paper':
      downloadPapers(program.format, program.output);
      break;
    default:
      log('Unrecognized target: ' + program.target);
  }
}());
