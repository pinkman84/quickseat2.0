const React = require('react');
const CreateForm = require('./CreateForm.jsx')

let CreateBox = React.createClass({

  getInitialState: function() {
    return { employers: [], students: [] };
  },

  componentDidMount: function() {
    this.fetchLists();
  },

  fetchLists: function(){
    let request = new XMLRequest();
    request.open("GET", this.props.url)
    request.onload = function(){
      let lists = JSON.parse(request.responseText);
        for ( let i = 0; i < lists.length; i++ ) {
          if (lists[i].type === 'employer') {
            this.addEmployer(lists[i])
          } else {
						this.addStudent(lists[i])
          }
        }
    }.bind(this)
    request.send(null);
  },

	addEmployer: function(employer){
    this.state.employers.push(employer)
  },

  addStudent: function(student){
    this.state.students.push(student)
  },

  render: function() {
    return (
      <div>
      <CreateForm />
      <ParticipantBox employersList = {this.state.employers}/>
      <ParticipantBox studentsList = {this.state.students}/>
      </div>
    );
  }

});

module.exports = ViewBox;
