import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, devTools, applyMiddleware(promiseMiddleware))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
