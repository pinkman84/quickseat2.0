var React = require('react');

const Clock = React.createClass({
    // displayName: 'Clock',
    // mixins: [SetIntervalMixin],
    getInitialState: function() {
        return { minutes: 0, seconds: 0 };
    },
    componentDidMount: function() {
        setInterval(this.tick, 1000);
    },
    renderTime: function() {
      let output = ''
      let m = 1
      let s = 59
      
      if (m < 10) {
          m = '0' + m;
      }
      if (s < 10) {
          s = '0' + s;
      }
      output = {
          minutes: m,
          seconds: s
      };
      return output;
    },
    tick: function() {
      console.log('fuckdis')
      let output = this.renderTime();
      this.setState( output );
    },
    render: function() {
        return (
            <p>
                {this.state.minutes}:{this.state.seconds}
                <button id="start" onClick={this.startClock}>Start</button>
            </p>
        );
    }
});

module.exports = Clock;

// var ClockBox = React.createClass({
//
//   getInitialState: function() {
//     return { minutes: 1, seconds: 0, clockText: "00:00" }
//   },


//   countDown: function( minutes, seconds ){
//     if ( minutes >= 0 && seconds >= -1 ) {
//        seconds -= 1;
//
//       if ( seconds < 0 && minutes >= 1){
//         minutes -= 1;
//         seconds = 59;
//       };
//
//       if (minutes === 0 && seconds === -1){
//         seconds = 0;
//       };
//
//       clockText = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
//                           + ":" + (seconds > 9 ? seconds : "0" + seconds)
//
//       this.setState( {clockText: clockText} );
//     }
//
//   }.bind(this),
//
//   startClock: function() {
//     let minutes = this.state.minutes
//     let seconds = this.state.seconds
//     while( minutes >= 0 && seconds >= 0 ){
//       setInterval( countDown( minutes, seconds ), 1000 );
//     };
//   }.bind(this),
//
//   render: function() {
//     return (
//       <div>
//         <h3 id="time">{this.clockText}</h3>
//         <button id="start" onClick={this.startClock}>Start</button>
//       </div>
//     );
//   }
//
// });
