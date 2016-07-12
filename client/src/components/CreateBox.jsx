const React = require('react');
const Participant = require('./Participant.js')
const CreateForm = require('./CreateForm.jsx')
const ParticipantBox = require('./ParticipantBox.jsx')

let CreateBox = React.createClass({

  getInitialState: function() {
    return {
      participants: [],
    };
  },

  componentDidMount: function() {
    console.log("mounted")
    this.fetchLists();
  },

  fetchLists: function() {
    console.log('CDM was called');
    let url = this.props.url
    let request = new XMLHttpRequest();
    request.open("GET", url)
    request.onload = function(){
      let list = JSON.parse(request.responseText);
      console.log('request', request.responseText);
      this.setState({
        participants: list
      });
      console.log('state', this.state.participants);
    }.bind(this)
    request.send();
  },

  filterParticipants: function(type) {
    let list = this.state.participants.filter(function(participant){
      return (participant.type === type)
    })
    return list
  },

  handlePartySubmit: function( name, type, image, number ) {
    console.log('trying to save', name);
    let newParticipant = new Participant( name, type, image, number );
    console.log('newParticipant', newParticipant);
    newParticipant.save();
    this.fetchLists()
  },

  imageDisplay: function(image){
    return image
  },

  render: function() {

    return (
      <div>
      <CreateForm handlePartySubmit = {this.handlePartySubmit}/>
      <div className="employers">
        <ParticipantBox
          participants={ this.filterParticipants('Employer') }
          pageState={ 1 }
        />
      </div>
      <div className="students">
        <ParticipantBox
          participants = {this.filterParticipants('Student')}
          pageState={ 1 }
        />
      </div>
      </div>
    );
  }

});

module.exports = CreateBox;
