const React = require('react');
const ReactDOM = require('react-dom');
const CommentBox = require('./components/CommentBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <ViewBox url="localhost/3000/lists" />,
    document.getElementById('app_view') 
  );
}
