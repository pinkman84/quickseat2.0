// var React = require('react');

// var Clock = React.createClass({

//   getInitialState: function() {
//     return {
//       minutes: 1 
//     };
//   },

//   render: function() {
//     return (
//       <div>
//       )
//   },

//   tick: function(){
//     if ( this.state.minutes >= 0 && this.seconds >= -1 ) {
//       this.seconds -= 1

//       if (this.seconds < 0 && this.minutes >= 1){
//         this.minutes -= 1
//         this.seconds = 59
//       }

//       if (this.minutes === 0 && this.seconds === -1){
//         this.seconds = 0
//       }

//       this.clockText = (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00")
//       + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds)
//       setInterval(function () {
//         this.setState({});
//       }, 1000);


//     }

 // });

// })

// module.exports = Clock;


var Clock = function( minutes ){
  this.limit = minutes;
  this.minutes = minutes;
  this.seconds = 0;
  this.clockText = (this.limit > 9 ? (this.limit + ":00") : ("0" + this.limit + ":00" ));
  this.stop = 1; // sets stop the clock on

  //this.t = 0;
}

Clock.prototype = {

  start: function(render, context){
      setInterval( function(){
        if ( this.minutes >= 0 && this.seconds >= -1 ) {
          this.seconds -= 1

          if (this.seconds < 0 && this.minutes >= 1){
            this.minutes -= 1
            this.seconds = 59
          }

          if (this.minutes === 0 && this.seconds === -1){
            this.seconds = 0
          }

          this.clockText = (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00")
                              + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds)

          context.render();

        }
      }.bind(this), 1000 );
  },

  clear: function(){
    this.minutes = this.limit;
    this.seconds = 0;
    this.clockText = (this.limit > 9 ? (this.limit + ":00") : ("0" + this.limit + ":00" ));
  }

};

module.exports = Clock;

// // while( this.minutes >= 0 ){
// //   console.log( this )
// //   this.seconds -= 1;
// //   if (this.seconds === -1) {
// //       this.seconds = 59;
// //       this.minutes -= 1;
// //     }
// //   if ( this.minutes === 0 && this.seconds === 0 ){
// //     break;
// //   }
// // }

// // start: function(){
// //   for ( this.minutes; this.minutes >= 0; this.minutes-- ) {
// //       setInterval( function(){
// //         for ( var j = ; this.seconds >= -1 )
// //         this.seconds -= 1;
// //
// //         if (this.seconds < 0 && this.minutes >= 1){
// //           this.minutes -= 1;
// //           this.seconds = 59;
// //         }
// //
// //         this.clockText = (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00")
// //                             + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
// //
// //         this.timeTag.innerText = this.clockText;
// //       }.bind(this), 1000 );
// //     }
// //   },
