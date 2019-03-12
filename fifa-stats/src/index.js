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

<<<<<<< HEAD
const store = createStore(reducer, applyMiddleware(thunk));

=======
const store = createStore(reducer, applyMiddleware(thunk, logger));
>>>>>>> 079c171cda47e04113c822fcbf74181e9a83a03d
ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root')
);
