import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let AppRun = React.createElement(App, null);
let where =  document.getElementById('root');

ReactDOM.render(AppRun, where);