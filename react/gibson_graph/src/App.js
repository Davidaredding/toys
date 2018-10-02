import React, { Component } from 'react';
import addMessage from './Actions/simpleAction';
import store from './store'

import logo from './logo.svg';
import './App.css';

//https://redux.js.org/basics/dataflow
const unsub = store.subscribe(()=>console.log(store.getState()));

class App extends Component {
  
  simpleAction = (event) =>{
    console.log(store.getState());
    store.dispatch(addMessage("Hello"));
    store.dispatch(addMessage(Date.now()));
    unsub();
  }

  render() {




    return (
      <div className="App">
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

export default (App);
