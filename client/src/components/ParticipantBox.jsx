var React = require('react');
const Participant = require('./participant.jsx')

var ParticipantBox = React.createClass({

  render: function() {
    let list = this.props.participants.map(function(partInfo){
      return (
        <div key={partInfo.id}>
        <h4> partInfo.name </h4>
        </div>
      )
    });

    return (
      {list}
    );
  }

});

module.exports = ParticipantBox;
