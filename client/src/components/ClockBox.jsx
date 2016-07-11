var React = require('react');

var ClockBox = React.createClass({

  getInitialState: function() {
    return {
      time: this.props.clock.clocktext 
    };
  },

  render: function() {
    console.log('clock', this.props.clock);
    return (
      <div>
        <h3 id="time">{this.state.time}</h3>
        <button id="start" onClick={this.props.clock.start}>Start</button>
        <button id="clear" onClick={this.props.clock.clear}>Reset</button>

      </div>
    );
  }

});

module.exports = ClockBox;