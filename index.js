const fs = require('fs');
const https = require('https');

https.get('', (response) => {
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
