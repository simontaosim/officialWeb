import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';
import MainHeader from '../components/MainHeader/MainHeader'
import OnePageSwitcher　from '../components/OnePageSwitcher/OnePageSwitcher'
import Home from '../components/body/index';
import AntdScroll from '../components/AntdScroll';
import AntdLink from '../components/AntdLink';


const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={MainHeader}>
      <IndexRoute component={OnePageSwitcher} />

    </Route>
    <Route path="/homedemo" component={Home}/>
    <Route path="/scrolldemo" component={AntdScroll} />
    <Route path="/linkdemo" component={AntdLink} />
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
