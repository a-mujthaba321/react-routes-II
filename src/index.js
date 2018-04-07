import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';

import reducers from './reducers';

import PostIndex from './components/PostIndex';

import { BrowserRouter, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
            <Route path="/" component={PostIndex} />

          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
