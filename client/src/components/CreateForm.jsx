const React = require('react');

let CreateForm = React.createClass( {

  getInitialState: function() {
    return { name: '', type: '', image: '', number: '' };
  },
	// handlePictureChange: function(e) {
	//   this.setState({picture: e.target.value});
	// },
  handleSubmit: function(e) {
    console.log('ive been submitted');
    e.preventDefault();
    var name = this.state.name.trim();
    var type = this.state.type.trim();
    // if (!type || !name) {
    //   return;
    // }
    this.props.handlePartySubmit(this.state.name, this.state.type, this.state.image, this.state.number);
    this.setState({name: '', type: '', image: '', number: ''});
  },

  handleNameChange: function(e) {
    let newName = e.target.value;
    this.setState({ name: newName } );
  },

  handleType: function(e) {
    let newType = e.target.value;
    this.setState({ type: newType })
  },

  render: function() {
    return (
			<div>
  			<form className="partyForm" onSubmit={this.handleSubmit}>
  				<input
            type="text" placeholder="Name"
            onChange={this.handleNameChange}
            value={this.state.name} />
          <select className="type" value={this.state.type} onChange={this.handleType}>
            <option>--</option>
            <option>Employer</option>
            <option>Student</option>
          </select>
          <input type="submit" value="Post" />
  			</form>

			</div>
    );
  }
});

module.exports = CreateForm;
