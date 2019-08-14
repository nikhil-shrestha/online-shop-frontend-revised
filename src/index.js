import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
