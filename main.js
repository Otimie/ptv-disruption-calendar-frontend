function Route(props) {
  return /*#__PURE__*/React.createElement("a", {
    className: "list-group-item list-group-item-action",
    href: '//ptv-disruption-calendar.lachlanb.me/' + props.route.route_id
  }, props.route.route_name);
}

function Routes(props) {
  return props.routes.map(route => /*#__PURE__*/React.createElement(Route, {
    key: route.route_id,
    route: route
  }));
}

function RouteType(props) {
  return /*#__PURE__*/React.createElement("div", {
    class: "card mb-3",
    style: {
      'break-inside': 'avoid'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header bg-light sticky-top"
  }, props.routeType.route_type_name), /*#__PURE__*/React.createElement("div", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/React.createElement(Routes, {
    routes: props.routeType.routes
  })));
}

function RouteTypes(props) {
  return props.routeTypes.map(routeType => /*#__PURE__*/React.createElement(RouteType, {
    key: routeType.route_type,
    routeType: routeType
  }));
}

function App(props) {
  return /*#__PURE__*/React.createElement(RouteTypes, {
    routeTypes: props.response
  });
}

fetch('//otimie.github.io/ptv-disruption-calendar-frontend/routes.json').then(response => {
  return response.json();
}).then(response => {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, {
    response: response
  }), document.getElementById('routes'));
});
