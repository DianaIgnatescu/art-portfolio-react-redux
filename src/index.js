import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';

import './index.css';
import * as actions from './store/actions';
import App from './App';
import * as serviceWorker from './serviceWorker';

const logger = createLogger({
  collapsed: true,
});

const store = createStore(rootReducer, applyMiddleware(
  thunk, logger,
));

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(actions.loginSuccess(token));
}

// store.dispatch({ type: 'HELLO' });
// store.dispatch(actions.fetchAllPosts());
// store.dispatch(actions.createPost('hds', 'hdsh', 'hda'));
// store.dispatch(actions.updatePost('dsdsa', 'dsdsa', 'dsads'));
// store.dispatch(actions.deletePost(1));
// store.dispatch(actions.loginRequest('brooks', '1234'));
store.dispatch(actions.fetchAllPosts());
// window.setTimeout(() => store.dispatch(actions.updatePost(6, 'asdf1', 'asdf1', 'asdf1')), 3000);
// window.setTimeout(() => store.dispatch(actions.createPost('asdf2', 'asdf2', 'asdf2')), 3000);
// window.setTimeout(() => store.dispatch(actions.deletePost(2)), 3000);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
