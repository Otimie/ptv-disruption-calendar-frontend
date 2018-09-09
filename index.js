const fs = require('fs');
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (response) => {
	var body = '';
	
	response.on('data', (data) => {
		body += data;
	});
	
	response.on('end', () => {
		JSON.parse(body);
	});
});
