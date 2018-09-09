const fs = require('fs');
const https = require('https');

https.get('https://timetableapi.ptv.vic.gov.au/v3/routes?devid=3000140&signature=686ED631EA14A104B20862942E94D7E2BEB575A6', (response) => {
	var body = '';
	
	response.on('data', (data) => {
		body += data;
	});
	
	response.on('end', () => {
		fs.writeFile('routes.json', body, (error) => {
			console.log('Wrote to file routes.json');
		});
	});
});
