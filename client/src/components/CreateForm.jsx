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
    if(e.target.value === 'Student'){

      this.image()
    }
  },

  handleImage: function(e){
    let newImg = e.target.value;
    this.setState({image: newImg})
  },

  image: function(){
   let image = this.refs.image
   image.style.visibility = "visible"
  },

  render: function() {
    return (
			<div id="create-form">
  			<form className="partyForm" onSubmit={this.handleSubmit}>
  				<input
            className="name-form"
            type="text" placeholder="Name"
            onChange={this.handleNameChange}
            value={this.state.name} />
          <select className="type" value={this.state.type} onChange={this.handleType}>
            <option>--</option>
            <option>Employer</option>
            <option>Student</option>
          </select>
          <input ref="image" id='std-img' type="file" name="myImage" accept="image/*" onChange={this.handleImage} value={this.state.image}/>
          <input id="post-btn" className="button" type="submit" value="Post" />
  			</form>

			</div>
    );
  }
});

module.exports = CreateForm;
