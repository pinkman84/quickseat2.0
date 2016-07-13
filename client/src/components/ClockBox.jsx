const React = require('react');
const numeral = require('numeral');

let ClockBox = React.createClass({

  render: function() {

    return (
      <div id="clock">
        <h3 id="time">{numeral(this.props.time).format('00:00:00')}</h3>
        <button className="button" id="start" onClick={this.props.start}>Start</button>
        <button className="button" id="clear" onClick={this.props.reset}>Reset</button>

      </div>
    );
  }

});

module.exports = ClockBox;
