var React = require('react');
const Participant = require('./participant.jsx')

var ParticipantBox = React.createClass({
  let list = this.props.participants.map(function(partInfo){
    return <div key={partInfo.id}>
      <h4> partInfo.name </h4>
  })

  render: function() {
    return (
      
    );
  }

});

module.exports = ParticipantBox;