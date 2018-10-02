import {createStore} from 'redux'
import messageApp from './Reducers/reducer'

export default createStore(
    messageApp, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);