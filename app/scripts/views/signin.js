//signin 登陆界面
var React = require("react");
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var SigninHeaderView = React.createClass({
    displayName: "SigninHeaderView",
    render : function(){
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                 <div className="container">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">Palmer ERP</a>
                    </div>
                  </div>
            </div>
            );
    }
});

var SigninFormView = React.createClass({
    displayName: "SigninFormView",
    handleSubmit : function(e){
        e.preventDefault();
        //登陆动作
        console.log("signin");

    },
    render : function(){
        return (
            <div className="container">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                      </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                  </form>
            </div>
            );
    }
});


var SigninView = React.createClass({
    displayName: "SigninView",
    render : function(){
        return (
            <div className="sigin-view">
                <SigninHeaderView/>
                <SigninFormView/>
                <RouteHandler/>
            </div>
        );
    }
});



module.exports = SigninView;