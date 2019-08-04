import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

import HeaderContainer from './header/HeaderContainer';
import HomeContainer from './home/HomeContainer';
import AddPostConainer from './posts/add-post/AddPostContainer';
import LoginContainer from './user/login/LoginContainer';
import RegisterContainer from './user/register/RegisterContainer';

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
/* eslint-enable */

const Routes = () => (
  <>
    <Provider store={store}>
      <HeaderContainer />
      <Switch>
        <>
          <Route path="/" component={HomeContainer} exact />
          <Route path="/add-post" component={AddPostConainer} exact />
          <Route path="/register" component={RegisterContainer} exact />
          <Route path="/login" component={LoginContainer} exact />
        </>
      </Switch>
    </Provider>
  </>
);

export default Routes;
