function Route(props) {
	return (
		<a class="list-group-item list-group-item-action" href="https://ptv-disruption-calendar.lachlanb.me/1">{props.routeName}</a>
	);
}

function Routes() {
	const routeNames = ["Alamein", "Belgrave"];
	return routeNames.map((routeName) =>
		<Route routeName={routeName} />
	);
}

function RouteType(props) {
	return (
		<div class="card my-3">
			<div class="card-header">{props.route_type_name}</div>
			<div class="list-group list-group-flush">
				<Routes routes={props.routes} />
			</div>
		</div>
	);
}

function RouteTypes(props) {
	return props.routeTypes.map((routeType) =>
		<RouteType routeType={routeType} />
	);
}

function App() {
	const routeTypes = {
		"route_type_name": "Train",
		"route_type": 0,
		"routes": [
			{
				"route_service_status": {
					"description": "Good Service","timestamp":"2019-09-18T10:24:38.9565672+00:00"
				},
				"route_type": 0,
				"route_id": 1,
				"route_name": "Alamein",
				"route_number": "",
				"route_gtfs_id": "2-ALM"
			}
		]
	};
	
	return (
		<RouteTypes routeTypes={routeTypes} />
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('routes')
);
