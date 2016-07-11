const React = require('react');
const ParticipantBox = require('./ParticipantBox.jsx')

let ViewBox = React.createClass({

  getInitialState: function() {
    return {
      employers: [],
      students: [] 
    };
  },

  componentDidMount: function() {
    this.fetchLists();
  },

  fetchLists: function(){
    console.log('CDM was called');
    let url = this.props.url
    let request = new XMLRequest();
    request.open("GET", url)
    request.onload = function(){
      let lists = JSON.parse(request.responseText);
        for (let i = 0; i < lists.length; i++) {
          if (lists[i].type === 'employer') {
            this.addEmployer(lists[i])
          }
          else{
            this.addStudent(lists[i])
          }
        }

    }.bind(this)
    request.send();
  },

  addEmployer: function(employer){
    this.state.employers.push(employer)
  },

  addStudent: function(student){
    this.state.students.push(student)
  },

  render: function() {
    return (
      <ParticipantBox participants = {this.state.employers}/>
      <ParticipantBox participants = {this.state.students}/>
    );
  }

});

module.exports = ViewBox;