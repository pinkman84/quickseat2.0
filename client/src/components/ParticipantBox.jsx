const React = require('react');
const Individual = require('./Individual.jsx');

var ParticipantBox = React.createClass({

  render: function() {

    const list = this.props.participants.map(function(partInfo){
      let logo = '';
      if ( partInfo.type === 'Employer' ) {
        logo = "//logo.clearbit.com/" + partInfo.name.toLowerCase().replace(/ /g,'') +".com?size=40"
      } else if ( partInfo.type === 'Student') {
        logo = 'picture'
      } return (
        <div id="participant" key={ partInfo._id }>
          <Individual participant={ partInfo } pageState={ this.props.pageState }/>
          <img src={logo}/>
        </div> )
      });

    return (
      <div>
        {list}
      </div>
      );
  }
});

module.exports = ParticipantBox;
