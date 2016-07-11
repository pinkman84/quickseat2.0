const React = require('react');
const ParticipantBox = require('./ParticipantBox.jsx')

const ViewBox = React.createClass({

  getInitialState: function() {
    return {
      participants: []
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

  render: function() {
    return (
      <div>
      <div className="employers">
        <ParticipantBox participants = {this.filterParticipants('employer')}/>
      </div>
      <div className="students">
        <ParticipantBox participants = {this.filterParticipants('student')}/>
      </div>
      </div>
    );
  }

});

module.exports = ViewBox;