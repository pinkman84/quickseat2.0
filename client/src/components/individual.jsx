const React = require('react');

const Individual = React.createClass({

  handleClose: function() {
    this.parentNode.removeChild(this.parentNode); return false;
  }.bind(this),

  render: function() {

    let buttonState = function(){
      if ( true ) {
        return <span id='close' onClick={ this.handleClose }>x</span>
      } else {
        return <span id='add' onClick={ this.handleClose }>+</span>
      }
    };

    return (
      <div className="individual">
        {buttonState}
        <h4> {this.props.participant.name} </h4>
      </div>
    );
  }

});

module.exports = Individual;
