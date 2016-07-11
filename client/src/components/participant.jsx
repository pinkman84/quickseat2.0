const React = require('react');

const Participant = React.createClass({

  render: function() {
    return (
      <div className="individual">
        <h4> {this.props.name}</h4>
      </div>
    );
  }

});

module.exports = Participant;