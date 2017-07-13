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
| -t, --target [value]  | What should be downloaded?| papers    	| papers 										|
| -f, --format [value]  | Output format 			| xml 			| xml, xml_short, csv_comma, csv_semicolon, xls |
| -o, --output [value]  | Path to output file 		| ./out 		|												|		
| -c, --config [value]  | Path to config file 		| ./config.json |												|
| -h, --help            | output usage information  |				|												|


## ConfTool REST API

This tool uses ConfTools REST API which is documented [here](https://www.conftool.net/ctforum/index.php?topic=280.0). Some options are not explained very well in that official documentation. Here are some additional information, extracted from the HTML Form used in ConfTools web interface.


### URLs and parameters for downloading paper information (extracted from ConfTool website)

Base URL for all calls: https://www.conftool.com/{{conference}}/rest.php?

| Action													| Required? | Option 								| Type 			| Allowed values									|
|-----------------------------------------------------------|-----------|---------------------------------------|---------------|---------------------------------------------------|
| Action (fixed value)										| yes		| page									| String		| adminExport										|
| Data to be exported										| yes		| export_select*						| String        | papers											|
| Add rows for each author in extended format 				| optional 	| form_export_papers_options%5B%5D		| String		| authors_extended 									|
| Add * (star) behind presenting author						| optional 	| form_export_papers_options%5B%5D 		| String		| authors_extended_presenters						|
| List name, organization and email in separate rows		| optional 	| form_export_papers_options%5B%5D		| String		| authors_extended_columns							|
| Add paper abstracts	to export							| optional 	| form_export_papers_options%5B%5D		| String		| abstracts											|
| Add paper reviews to export (may take a while)			| optional 	| form_export_papers_options%5B%5D		| String		| reviews 											|
| Add info about corresponding session to export			| optional 	| form_export_papers_options%5B%5D		| String		| session 											|
| Add links to uploaded files	to export					| optional 	| form_export_papers_options%5B%5D		| String		| downloads                         				|
| Add submitting author info to export						| optional 	| form_export_papers_options%5B%5D		| String		| submitter											|
| List multiple authors and organizations in seperate lines	| optional 	| form_export_papers_options%5B%5D		| String		| newlines											|
| Probably a filter?										| optional 	| form_track							| ?				| ?													|
| Probably a filter?										| optional 	| form_status							| ? 			| ?													|
| Probably a filter?										| optional 	| form_personType						| ? 			| ?													|
| Probably a filter?										| optional 	| form_event							| ?				| ?													|
| Probably a filter?										| optional 	| form_notpaid							| ? 			| ?													|
| Probably a filter?										| optional 	| form_lastupdate						| ? 			| ?													|
| Probably a filter?										| optional 	| form_paymethod						| ? 			| ?													|
| Include deleted items										| yes		| form_include_deleted					| Integer		| 0,1 (used as Booleans)							|
| Output format												| yes		| form_export_format 					| String 		| xml, xml_short, csv_comma, csv_semicolon, xls 	|
| Include header in output 									| yes		| form_export_header					| String		| default 											|
| Export (fixed value)										| yes		| cmd_create_export						| String		| true												|


* Other values can be used to access differnent data: invitations, authors, subsumed_authors, topics, reviews, reviewers, sessions, participants, nametags, identities, event_participants, payments, identities