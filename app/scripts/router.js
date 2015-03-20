//router
var React = require("react");
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

//登陆界面
var SigninView = require("./views/signin");
//主界面
var IndexView = require("./views/index");


var App = React.createClass({
    displayName: "App",
        render : function(){
            return (
                <div>
                    Palmer ERP
                    <RouteHandler/>
                </div>
            );
        }
    
    });
        
        
            
    
var routes = (
      React.createElement(Route, {handler: App}, 
        React.createElement(Route, {name: "signin", path: "/signin", handler: SigninView}), 
        React.createElement(Route, {name: "index", path: "/index", handler: IndexView}), 
        React.createElement(DefaultRoute, {handler: SigninView})
      )
    );


module.exports = routes;
/*
    Router.run(routes, function (Handler) {
      React.render(React.createElement(Handler, null), document.getElementById("app"));
    });
    */