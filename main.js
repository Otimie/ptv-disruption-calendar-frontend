function Route(props) {
	return (
		<a className="list-group-item list-group-item-action" href={'//ptv-disruption-calendar.lachlanb.me/' + props.route.route_id}>{props.route.route_name}</a>
	);
}

function Routes(props) {
	return props.routes.map((route) =>
		<Route key={route.route_id} route={route} />
	);
}

function RouteType(props) {
	return (
		<div class="card mb-3" style={'break-inside': 'avoid'}>
			<div className="card-header bg-light sticky-top">{props.routeType.route_type_name}</div>
			<div className="list-group list-group-flush">
				<Routes routes={props.routeType.routes} />
			</div>
		</div>
	);
}

function RouteTypes(props) {
	return props.routeTypes.map((routeType) =>
		<RouteType key={routeType.route_type} routeType={routeType} />
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
