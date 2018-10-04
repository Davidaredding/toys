import React, { Component } from 'react';
import addMessage from './Actions/simpleAction';
import {connect} from 'react-redux';


//import store from './store'

//import logo from './logo.svg';
import './App.css';



//https://redux.js.org/basics/dataflow
//https://redux.js.org/basics/usagewithreact

const mapStateToProps = state =>{
  return {
    MOTD: state.motd
  }
}

let interval;

//This injects the 'motdClick' as a prop
const mapDispatchToProps = dispatch=>{
  return{
    motdClick: m=>{
      if(interval === undefined)
        interval = setInterval(()=>dispatch(addMessage(Date.now())), 1);
      else
        interval = clearInterval(interval);
    }
  }
}


class App extends Component {
//   constructor(){
//     super();
// //    store.subscribe(()=>console.log(this));
//   }
  
  // messageAction = ()=>{
  //   console.log(store.getState());
  //   store.dispatch(addMessage("Hello"));
  //   store.dispatch(addMessage(Date.now()));
  // }
  render() {
    return (
     
      <div className="App">
        <button onClick={this.props.motdClick}>Test redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
