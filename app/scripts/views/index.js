//indexview

var React = require("react");
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var IndexView = React.createClass({
    displayName: "SigninView",
    render : function(){
        return (
            <div className="container">
                Hello,World!
                <RouteHandler/>
            </div>
        );
    }
});



module.exports = IndexView;