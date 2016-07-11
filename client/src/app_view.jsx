const React = require('react');
const ReactDOM = require('react-dom');
const ViewBox = require('./components/ViewBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <ViewBox url="/lists" />,
    document.getElementById('app_view') 
  );
}
