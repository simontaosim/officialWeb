import './index.html';
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import App from '../components/App';
import Routes from '../routes/index';
import $ from "jquery";

import './pure-min.css'

ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
