const React = require('react');
const ParticipantBox = require('./ParticipantBox.jsx')
const ClockBox = require('./ClockBox.jsx')

const ViewBox = React.createClass({

  getInitialState: function() {
    return {
      participants: [],
      time: 600,
      employers: [],
      test: 328
    };
  },

  componentDidMount: function() {
    this.fetchLists();
  },

  fetchLists: function(){
    console.log('CDM was called');
    let url = this.props.url
    let request = new XMLHttpRequest();
    request.open("GET", url)
    // console.log(request);
    request.onload = function(){
      let list = JSON.parse(request.responseText);
      // console.log('view request', request.responseText);
      this.setState({
        participants: list
      });
      this.setEmployers( this.filterParticipants( 'Employer' ) );
    }.bind(this)
    request.send();
  },

  filterParticipants: function(type){
    let list = this.state.participants.filter(function(participant){
      return participant.type === type
    })
    console.log( 'list', list )
    return list
  },

  displayTime: function(){
    setInterval(this.start, 200)
  },

  start: function(){
    let newTime = this.state.time
    if(newTime){
      newTime --
    }
    this.setState({time: newTime})
  },

  reset: function(){
    console.log('reset button');
    this.setState({time: 600})
    this.shuffle(this.state.employers)
  },

  setEmployers: function(array){
    console.log( array, 'empss' )
    this.setState({ employers: array});
  },

  shuffle: function(array){
    let newArray = array;
    let lastEmployer = array.pop();
    newArray.unshift(lastEmployer);
    this.setState({employers: newArray})
  },

  render: function() {

    return (
      <div id="view-box">
       <form method="get" action="./create.html">
           <button className="button" type="submit">Create Event</button>
      </form>
       <form method="get" action="./index.html">
           <button className="button" type="submit">Home Page</button>
      </form>

      <div className="employers">
      <ParticipantBox
      participants={ this.state.employers }
      pageState={ 1 }

      />
      </div>
      <div className="students">
      <ParticipantBox
      participants={ this.filterParticipants('Student')}
      pageState={ 1 }
      />
      </div>
      <ClockBox className="clock" time={this.state.time} start={this.displayTime} reset={this.reset}/>
      </div>
      );
  }

});

module.exports = ViewBox;
