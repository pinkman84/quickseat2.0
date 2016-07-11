const React = require('react');
const ReactDOM = require('react-dom');
const CreateBox = require('./components/CreateBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <CreateBox url="localhost/3000/lists" />,
    document.getElementById('app_create')
  );
}
