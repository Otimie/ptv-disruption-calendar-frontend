function Route(props) {
	return (
		<a class="list-group-item list-group-item-action" href="https://ptv-disruption-calendar.lachlanb.me/{props.route.route_id}">{props.route.route_name}</a>
	);
}

function Routes(props) {
	return props.routes.map((route) =>
		<Route route={route} />
	);
}

function RouteType(props) {
	return (
		<div class="card my-3">
			<div class="card-header">{props.routeType.route_type_name}</div>
			<div class="list-group list-group-flush">
				<Routes routes={props.routeType.routes} />
			</div>
		</div>
	);
}

function RouteTypes(props) {
	return props.routeTypes.map((routeType) =>
		<RouteType routeType={routeType} />
	);
}

function App(props) {
	return (
		<RouteTypes routeTypes={props.response} />
	);
}
fetch('//otimie.github.io/ptv-disruption-calendar-frontend/routes.json').then((response) => {
	return response.json();
}).then((response) => {
	ReactDOM.render(
		<App response={response} />,
		document.getElementById('routes')
	);
});
