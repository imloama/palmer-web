//入门

var React = require("react");
var Router = require('react-router');

var routes = require("./router");


Router.run(routes, function (Handler) {
      React.render(<Handler/>, document.getElementById("app"));
  });


