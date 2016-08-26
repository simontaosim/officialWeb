import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';
import MainHeader from '../components/MainHeader/MainHeader'
import OnePageSwitcher　from '../components/OnePageSwitcher/OnePageSwitcher'


const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/actived" component={App} />
    <Route path="/completed" component={App} />
    <Route path="/mainheader" component={MainHeader} />
    <Route path="/onepage" component={OnePageSwitcher} />
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
