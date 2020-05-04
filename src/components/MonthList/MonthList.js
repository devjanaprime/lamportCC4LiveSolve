import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component{
    render(){
        return(
            <div>
                <p>MonthList</p>
                <ul>
                    { this.props.months.map( ( month )=><li key={ month.id }><MonthItem month={month}/></li> ) }
                </ul>
                
            </div>
        ) // end return
    } // // render
} // end class

export default MonthList;