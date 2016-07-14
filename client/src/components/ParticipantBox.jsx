const React = require('react');
const Individual = require('./Individual.jsx');

let ParticipantBox = React.createClass({

  render: function() {
    if( !this.props.participants ) { return( <h4>fetching data</h4> ) };
    let list = this.props.participants.map(function(partInfo){
      if(partInfo.type === 'Employer'){
        var logo = "//logo.clearbit.com/" + partInfo.name.toLowerCase().replace(/ /g,'') +".com?.co.uk?.net?.org?size=80"
         var picture = <img className="profiles" src={logo} width="80" height="80"/>


      } 
      else if (partInfo.type === 'Student') {
        logo = "/images/" + partInfo.name + ".jpg"
        picture = <img className="profiles" src={logo} width="60" height="80"/>
      } 

      return (
        <div id="participant" key={ partInfo._id } draggable="true">
          <Individual participant={ partInfo } pageState={ this.props.pageState } value={partInfo.type} picture={picture} />
        </div>
        )
    }.bind(this))
    return (
      <div id="pbox">
        {list}
      </div>
      );
  }
});

module.exports = ParticipantBox;
