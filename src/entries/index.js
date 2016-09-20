import './index.html';
import ReactDOM from 'react-dom';
import React from 'react';
import { hashHistory } from 'react-router';
import App from '../components/App';
import Routes from '../routes/index';
import $ from "jquery";

import './pure-min.css'

ReactDOM.render(<Routes location={hashHistory} />, document.getElementById('react-content'));
