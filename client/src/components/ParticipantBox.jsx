const React = require('react');
const Individual = require('./Individual.jsx');

var ParticipantBox = React.createClass({

  render: function() {

    const list = this.props.participants.map(function(partInfo){
      let logo = '';
      if ( partInfo.type === 'employer' ) {
        logo = "//logo.clearbit.com/" + partInfo.name.toLowerCase().replace(/ /g,'') +".com?size=40"
      } else if ( partInfo.type === 'student') {
        logo = 'picture'
      } return (
        <div id="participant" key={ partInfo._id }>
          <h4> {partInfo.name} </h4>
          <img src={logo}/>
        </div> )
      });

    return (
      <div>
        <Individual participant={list} create={true} />
      </div>
      );
  }
});

module.exports = ParticipantBox;
