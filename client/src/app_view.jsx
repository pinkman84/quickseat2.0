const React = require('react');
const ReactDOM = require('react-dom');
const ViewBox = require('./components/ViewBox.jsx');
const Canvas = require('./components/canvas.js')

window.onload = function(){
  ReactDOM.render(
    <ViewBox url="/lists" />,
    document.getElementById('app_view')
  )
  let canvas = new Canvas(document.getElementById('canvas'))
}
