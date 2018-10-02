import React, { Component } from 'react';
import addMessage from './Actions/simpleAction';
import store from './store'

//import logo from './logo.svg';
import './App.css';


//https://redux.js.org/basics/dataflow
//https://redux.js.org/basics/usagewithreact



class App extends Component {
  constructor(){
    super();
    store.subscribe(()=>this.props.MOTD = store.getState().motd);
  }
  
  messageAction = ()=>{
    console.log(store.getState());
    store.dispatch(addMessage("Hello"));
    store.dispatch(addMessage(Date.now()));
  }
  render() {
    return (
     
      <div className="App">
        <button onClick={this.messageAction}>Test redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

export default App;
