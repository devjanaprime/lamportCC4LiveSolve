import React, { Component } from 'react';

class MonthItem extends Component{
    render(){
        return(
            <span>{ this.props.month.name }</span>
        ) // end return
    } // // render
} // end class

export default MonthItem;