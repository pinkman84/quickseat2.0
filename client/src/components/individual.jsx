const React = require('react');

const CreateIndividual = React.createClass({
  getInitialState: function(){
    return ( { available: true, eventArray: [] } )
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
      let aButton = <button id='add'>Add Participant</button>

      if ( this.state.available === false ){
        eventArray.push( this.props.participant );

      } else {

      }
      return( <div className="individual">
                { aButton }
                <h4>{ name }</h4>
              </div> )
    };

    let eventView = function() {
      // do view page logic
      let aButton = <button id='close' onClick={ this.handleClose }>x</button>

      if ( this.state.available === false ) {
        name = "Unavailable";
        aButton = <button id='add' onClick={ this.handleAdd }>+</button>
      } else {
        name = this.props.participant.name;
        aButton = <button id='close' onClick={ this.handleClose }>x</button>
      }
      return( <div className="individual">
                { aButton }
                <h4>{ name }</h4>
              </div> )
    };

    let eventFormat = <div></div>;
    if ( this.props.pageState === 1 ){
      eventFormat = eventView();
    } else {
      eventFormat = createView();
    }

    return (
      {eventFormat}
    )
  }

});

module.exports = CreateIndividual;
