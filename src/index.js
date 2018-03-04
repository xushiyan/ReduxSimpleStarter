import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import Home from './components/home';
import PostDetail from './components/post';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path='/:category/:post_id/comments/edit' component={PostCommentEdit} /> */}
          <Route path='/:category/:post_id' component={PostDetail} />
          <Route exact path='/:category' component={Home} />
          {/* <Route path='/posts/edit' component={PostEdit} /> */}
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
