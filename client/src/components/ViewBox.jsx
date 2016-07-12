const React = require('react');
const ParticipantBox = require('./ParticipantBox.jsx')
const ClockBox = require('./ClockBox.jsx')

const ViewBox = React.createClass({

  getInitialState: function() {
    return {
      participants: [],
      time: 600
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
    console.log(request);
    request.onload = function(){
      let list = JSON.parse(request.responseText);
      console.log('view request', request.responseText);
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
      setInterval(this.start, 200)
  },

  start: function(){

    let newTime = this.state.time
    if(newTime){
      newTime --
    }
    this.setState({time: newTime})
  },

  reset: function(){
    console.log('reset button');
    this.setState({time: 600})
      },

 
  render: function() {
    return (
      <div>
      <div className="employers">
        <ParticipantBox participants = {this.filterParticipants('Employer')} />
      </div>
      <div className="students">
        <ParticipantBox participants = {this.filterParticipants('Student')}/>
      </div>
      <ClockBox className="clock" time={this.state.time} start={this.displayTime} reset={this.reset}/>
      </div>
    );
  }

});

module.exports = ViewBox;
