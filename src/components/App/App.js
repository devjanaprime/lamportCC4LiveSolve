import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';
import Header from '../Header/Header';

class App extends Component {

  state = {
    months: [],
    selectedMonth: 'TEST'
  } // end state

  componentDidMount(){
    this.getMonths();
    /// - test
    this.setSelectedMonth( 'in app' );
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
        <Header selectedMonth={ this.state.selectedMonth }/>
        <br/>
        <MonthList months={ this.state.months } setSelectedMonth={ this.setSelectedMonth }/>
      </div>
    ); // end return
  } // end render

  setSelectedMonth = ( monthToShow ) =>{
    console.log( 'in setSelectedMonth:', monthToShow );
    this.setState({
      selectedMonth: monthToShow
    }); 
  } // end setSelectedMonth

} // end class

export default App;
