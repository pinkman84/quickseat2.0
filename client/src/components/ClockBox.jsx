const React = require('react');


let ClockBox = React.createClass({

  render: function() {
    console.log('cbox',this.props.clock.clockText);
    return (
      <div>
        <h3 id="time">{this.props.clock.clockText}</h3>
        <button id="start" onClick={this.props.start}>Start</button>
        <button id="clear" onClick={this.reset}>Reset</button>

      </div>
    );
  }

});

module.exports = ClockBox;