# A node.js cli tool to extract proceeding data and submitted files from ConfTool

## Install

* Make sure Node.js (> 6.0) is installed.
* Clone repository and run `npm install`. 
* Move `config.example` to `config.json` and edit your api information (API key and path to rest.php)

## Export data

Run `./download.js` to export data from your ConfTool instance.

### Options

| Option				| Description				| Default Value	| Allowed Values 								|
|-----------------------|---------------------------|---------------|-----------------------------------------------|
| -V, --version         | output the version number |				|		 										|
| -t, --target [value]  | What should be downloaded?| papers    	| papers, sessions								|
| -f, --format [value]  | Output format 			| xml 			| xml, xml_short, csv_comma, csv_semicolon, xls |
| -o, --output [value]  | Path to output file 		| ./out 		|												|		
| -c, --config [value]  | Path to config file 		| ./config.json |												|
| -h, --help            | output usage information  |				|												|