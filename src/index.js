// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); /* code change */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> /* code change */,
  document.getElementById('root')
);



// So, to recap, just like we did previously, we call our createStore() method 
// in src/index.js. We pass our createStore() method a reducer, and then we pass 
// our newly created store to our App component as a prop. 