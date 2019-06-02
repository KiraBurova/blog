import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

import HeaderContainer from './header/HeaderContainer';
import HomeContainer from './home/HomeContainer';
import SettingsContainer from './settings/SettingsContainer';
import AddPostConainer from './add-post/AddPostContainer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const Routes = () => (
  <React.Fragment>
    <Provider store={store}>
      <HeaderContainer />
      <Switch>
        <div>
          <Route path="/" component={HomeContainer} exact />
          <Route path="/settings" component={SettingsContainer} exact />
          <Route path="/add-post" component={AddPostConainer} exact />
        </div>
      </Switch>
    </Provider>
  </React.Fragment>
);

export default Routes;
