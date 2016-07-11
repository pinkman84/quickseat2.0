const React = require('react');
const ParticipantBox = require('./ParticipantBox.jsx')
const ClockBox = require('./ClockBox.jsx')
const Clock = require('./clock.js')

let clock = new Clock(1)

const ViewBox = React.createClass({
  
  getInitialState: function() {
    return {
      participants: [],
      clock: clock
      // minutes: clock.minutes
    };
  },

  componentDidMount: function() {
    console.log("mounted")
    this.fetchLists();
  },

  fetchLists: function(){
    console.log('CDM was called');
    let url = this.props.url
    let request = new XMLHttpRequest();
    request.open("GET", url)
    request.onload = function(){
      let list = JSON.parse(request.responseText);
      this.setState({
        participants: list
      });
    }.bind(this)
    request.send();
  },

  filterParticipants: function(type){
    let list = this.state.participants.filter(function(participant){
      return (participant.type === type)
    })
    return list
  },

  displayTime: function(){
    clock.start(this.render, this)
    let currentTime = this.state.clock
    this.setState({clock: currentTime})
    return currentTime
  },


  start: function(){
    this.displayTime()
  },

  reset: function(){
    this.shuffle()
    //clock to restart
      },

  shuffle: function(participantList){
    let lastEmployer = participantList.pop()
    let newOrder = participantList.unshift(lastEmployer)
    console.log('shuffled', participantList)

  },

  render: function() {
    return (
      <div>
      <div className="employers">
        <ParticipantBox participants = {this.filterParticipants('employer')} changeOrder={this.shuffle(this.filterParticipants('employers'))}/>
      </div>
      <div className="students">
        <ParticipantBox participants = {this.filterParticipants('student')}/>
      </div>
      <ClockBox className="clock" clock={this.state.clock} start={this.start} reset={this.reset}/>
      </div>
    );
  }

});

module.exports = ViewBox;
