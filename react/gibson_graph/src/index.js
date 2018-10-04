import React from 'react';
import ReactDOM from 'react-dom';
import messageApp from './Reducers/reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';


const store = createStore(
    messageApp, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );






ReactDOM.render(
    <Provider store={store}>
        <App MOTD="" />
    </Provider>,
    
    document.getElementById('root')
);


