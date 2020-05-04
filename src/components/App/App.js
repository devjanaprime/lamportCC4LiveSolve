import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';

class App extends Component {

  state = {
    months: []
  } // end state

  componentDidMount(){
    this.getMonths();
  }

  getMonths = () =>{
    axios.get( '/calendar' ).then( ( response )=>{
      console.log( 'back from Get:', response.data );
      this.setState({
        months: response.data
      });
    }).catch( ( err )=>{
      alert( 'error getting months' );
      console.log( err );
    }) //end axios
  } // getMonths

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>SELECTED MONTH GOES HERE</h3>
          <p>{ JSON.stringify( this.state.months ) }</p>
          <br/>
        </header>
        <br/>
        <MonthList />
      </div>
    );
  }
}

export default App;
