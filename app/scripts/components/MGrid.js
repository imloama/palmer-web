var React = require("react");
var MGrid = React.createClass({
  getInitialState : function(){
    return {secondsElapsed : 0};
  },

  tick : function(){
    var sec = this.state.secondsElapsed + 1;
    this.setState({
      secondsElapsed: sec
    });
  },

  componentDidMount : function(){
    this.interval = setInterval(this.tick,1000);
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  },

  render : function(){
    return (
      <div>
        Seconds Elapsed :  {this.state.secondsElapsed}
      </div>);
  }
});
module.exports = MGrid;
