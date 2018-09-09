const fs = require('fs');
const https = require('https');

https.get('https://timetableapi.ptv.vic.gov.au/v3/route_types?devid=3000140&signature=9CD4B7E9293B24D5FF3EC986417C54050FE85B93', (response) => {
	var body = '';
	
	response.on('data', (data) => {
		body += data;
	});
	
	response.on('end', () => {
		
		var aaa = [];
		var bbb = {};
		
		JSON.parse(body).route_types.forEach((element) => {
			element.routes = [];
			
			aaa.push(element);
			
			bbb[element.route_type] = element;
		});
		
		https.get('https://timetableapi.ptv.vic.gov.au/v3/routes?devid=3000140&signature=686ED631EA14A104B20862942E94D7E2BEB575A6', (response) => {
			var body = '';

			response.on('data', (data) => {
				body += data;
			});

			response.on('end', () => {
				
				JSON.parse(body).routes.forEach((element) => {
					bbb[element.route_type].routes.push(element);
				});
				
				fs.writeFile('dist/routes.json', JSON.stringify(aaa), (error) => {
					console.log('Wrote to file routes.json');
				});
			});
		});
	});
});
