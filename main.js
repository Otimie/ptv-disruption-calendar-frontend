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

function RouteType() {
	return (
		<div class="card my-3">
			<div class="card-header">Train</div>
			<div class="list-group list-group-flush">
				<Routes />
			</div>
		</div>
	);
}

function RouteTypes() {
	return (
		<RouteType routeTypeName="Train" />
	);
}

function App() {
	return (
		<RouteTypes />
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('routes')
);
