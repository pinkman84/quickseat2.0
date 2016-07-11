const React = require('react');
// const Participant = require('./participant.jsx')

var ParticipantBox = React.createClass({
  

  render: function() {
    const list = this.props.participants.map(function(partInfo){

      let logo = "//logo.clearbit.com/" + partInfo.name.toLowerCase().replace(/ /g,'') +".com?size=40"
      return(
        <div id="participant" key={partInfo.id}>
          <h4> {partInfo.name} </h4>
          <img src={logo}/>
        </div>
      )
    })

    return (
      <div> 
        {list}
      </div>
    );
  }

});

module.exports = ParticipantBox;