import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

