var React = require('react');
const Clock = require('./clock.js')

var ClockBox = React.createClass({

  render: function() {
    let myClock = new Clock(1)

    return (
      <div>
        <h3 id="time">{myClock.clockText}</h3>
        <button id="start" onClick={myClock.start}>Start</button>
        <button id="clear" onClick={myClock.clear}>Reset</button>

      </div>
    );
  }

});

module.exports = ClockBox;