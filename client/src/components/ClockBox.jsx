var React = require('react');

var ClockBox = React.createClass({

  getInitialState: function() {
    return {
      time: null 
    };
  },

  render: function() {

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