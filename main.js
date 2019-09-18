function Route() {
	return (
		<a class="list-group-item list-group-item-action" href="https://ptv-disruption-calendar.lachlanb.me/1">Alamein</a>
	);
}

function Routes() {
	return (
		<Route />
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
		<RouteType />
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
