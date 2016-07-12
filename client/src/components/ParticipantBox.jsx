const React = require('react');
// const Participant = require('./participant.jsx')

var ParticipantBox = React.createClass({

  render: function() {

    let list = this.props.participants.map(function(partInfo){
      if(partInfo.type === 'Employer'){
        var logo = "//logo.clearbit.com/" + partInfo.name.toLowerCase().replace(/ /g,'') +".com?size=40"
      }
      else{
        logo = "/images/" + partInfo.name + ".jpg"
      }

      return(
        <div id="participant" key={ partInfo._id } draggable="true">
          <h4> {partInfo.name} </h4>
          <img src={logo} width="80" height="80"/>
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
