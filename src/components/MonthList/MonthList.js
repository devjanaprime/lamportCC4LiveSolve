import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component{
    render(){
        return(
            <div>
                <p>MonthList</p>
                <p><MonthItem /></p>
            </div>
        ) // end return
    } // // render
} // end class

export default MonthList;