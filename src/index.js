import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';

import reducers from './reducers';


import PostIndex from './components/PostIndex';
import NewPost from './components/NewPost';
import ViewPost from './components/ViewPost';
import AsyncCreate from './components/atoms/AsyncCreate';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';


library.add(fab, faCheckSquare, faCoffee);


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
/* eslint-env browser */
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
            <Switch>
                <Route path="/select" component={AsyncCreate} />
               <Route path="/posts/new" component={NewPost} />
               <Route path="/posts/:id" component={ViewPost} />
               <Route path="/" component={PostIndex} />
            </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
