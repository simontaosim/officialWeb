import React, { PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import configureStore from "../../stores/Main";

import NotFound from '../components/NotFound';
import MainHeader from '../components/MainHeader/MainHeader'
import OnePageSwitcher　from '../components/OnePageSwitcher/index'
import Home from '../components/body/index';
import AntdScroll from '../components/AntdScroll';
import AntdLink from '../components/AntdLink';
import ShopSwitcher from '../components/ShopSwitcher/index';
import PageNotScroller from '../components/PageNotScroller';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

var isFreshed = false;

const changePage = (nextState, replace, callback) => {

  if (isFreshed) {
    window.location.reload();
    isFreshed = !isFreshed;
  }
  callback();
}

const Routes = ({ location, shopId }) =>
<Provider store={store}>
  <Router history={location}>
    <Route path="/" component={MainHeader}>
      <IndexRoute  component={OnePageSwitcher} />
      <Route path="/brandidea" component={OnePageSwitcher} />
      <Route path="/brandprogress" component={OnePageSwitcher} />
      <Route path="/contact"  component={PageNotScroller} />
      <Route path="/shops" component={ShopSwitcher} />
      <Route path="/shops/:id"  component={ShopSwitcher} />
      <Route path="*" component={PageNotScroller}/>

    </Route>

  </Router>
</Provider>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
