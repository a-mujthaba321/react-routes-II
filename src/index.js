import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';

import reducers from './reducers';

import PostIndex from './components/PostIndex';
import NewPost from './components/NewPost';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
/* eslint-env browser */
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
            <Switch>
               <Route path="/posts/new" component={NewPost} />
               <Route path="/" component={PostIndex} />
            </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
