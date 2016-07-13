const React = require('react');
const Individual = require('./Individual.jsx');

var ParticipantBox = React.createClass({

  render: function() {
    if( !this.props.participants ) { return( <h4>fetching data</h4> ) };
    let list = this.props.participants.map(function(partInfo){
      if(partInfo.type === 'Employer'){
        var logo = "//logo.clearbit.com/" + partInfo.name.toLowerCase().replace(/ /g,'') +".com?size=40"
         var picture = <img className="profiles" src={logo} width="80" height="80"/>


      } 
      else if (partInfo.type === 'Student') {
        logo = "/images/" + partInfo.name + ".jpg"
        picture = <img className="profiles" src={logo} width="80" height="120"/>
      } 

      return (
        <div id="participant" key={ partInfo._id } draggable="true">
          <Individual participant={ partInfo } pageState={ this.props.pageState } value={partInfo.type} picture={picture} />
        </div>
        )
    }.bind(this))
    return (
      <div>
        {list}
      </div>
      );
  }
});

module.exports = ParticipantBox;
