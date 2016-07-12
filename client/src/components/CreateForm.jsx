const React = require('react');

let CreateForm = React.createClass({
  getInitialState: function() {
    return { name: '', type: '' };
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
	handleClick: function() {
	    let type = React.findDOMNode(this.refs.typeSelect).value;
			this.setState({type: type});
			this.handleSubmit;
	},
	// handlePictureChange: function(e) {
	//   this.setState({picture: e.target.value});
	// },
  handleSubmit: function(e) {
    e.preventDefault();
    let name = this.state.name.trim();
    let type = this.state.type;

    if ( !name || !type ) {
      return;
    }

    this.props.onPartySubmit({name: name, type: type});
    this.setState({name: '', text: ''});
  },
  render: function() {
    return (
			<div>
			<form className="partyForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={this.state.Name}
					onChange={this.handleNameChange}
				/>
				<input type="submit" value="Add Participant" />
			</form>
			<select className="Type" ref="typeSelect">
				<option value="Employer">Employer</option>
				<option value="Student">Student</option>
			</select>
			<button onClick={this.handleClick}>Submit</button>
			</div>
    );
  }
});

module.exports = CreateForm;
