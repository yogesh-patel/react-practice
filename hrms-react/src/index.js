import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import LoginContainer from './containers/LoginContainer';
import Dashboard from "layouts/Dashboard/Dashboard.jsx";

import "assets/css/material-dashboard-react.css?v=1.2.0";

import indexRoutes from "routes/index.jsx";

import createStore from './store';

const store = createStore();

const hist = createBrowserHistory();

const history = syncHistoryWithStore(hist, store)

ReactDOM.render(
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/" component={Dashboard}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
);
