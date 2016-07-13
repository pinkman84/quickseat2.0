const React = require('react');

const CreateIndividual = React.createClass({
  getInitialState: function(){
    return ( { available: true, inEvent: false } )
  },

  handleAdd: function() {
    this.setState( { available: true } )
  },

  handleClose: function() {
    this.setState( { available: false } )
  },

  render: function() {

    let name = this.props.participant.name;

    let createView = function() {
      // do create page logic
      console.log('hey can you see this', name);
      let aButton = <button id='add'>Add Participant</button>
      if ( this.state.available === false ){
        aButton = <button id='close' onClick={this.addEvent}>Remove Participant</button>
      } else {
        aButton = <button id='add' onClick={this.handleClose}>Add Participant</button>
      }
      return( <div className="individual">
                { aButton }
                { this.props.picture }
                <h4>{ name }</h4>
              </div> )
    }.bind(this);

    let eventView = function() {
      // do view page logic
      console.log('hey can you see me?', name);
      let aButton = <button id='close' onClick={ this.handleClose }>x</button>
      let thisPicture = this.props.picture

      if ( this.state.available === false ) {
        name = "Unavailable";
        console.log(thisPicture);
        thisPicture = <img className="profiles" src="//logo.clearbit.com/codeclan.com?size=40" width="40" height="40"/>
        aButton = <button id='add' onClick={ this.handleAdd }>+</button>
      } else {
        name = this.props.participant.name;
        thisPicture = this.props.picture;
        aButton = <button id='close' onClick={ this.handleClose }>x</button>
      }
      return ( 
        <div className="individual">
            { thisPicture } 
            <h4>{ name }</h4>
            { aButton }
        </div> 
            )
    }.bind(this);

    let eventFormat = <div></div>;
    if ( this.props.pageState === 1 ){
      eventFormat = eventView();
    } else if (this.props.pageState === 2) {
      eventFormat = createView();
    }

    return (

      <div id="ibox">
      {eventFormat}
      </div>
    )
    console.log(this.props.pageState);
  }

});

module.exports = CreateIndividual;
