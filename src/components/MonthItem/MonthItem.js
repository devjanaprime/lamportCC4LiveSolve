import React, { Component } from 'react';

class MonthItem extends Component{

    monthClick = () =>{
        // alert( 'in monthClick: ' + this.props.month.name );
        this.props.setSelectedMonth( this.props.month.name );
    }

    render(){
        return(
            <span onClick={ this.monthClick }>{ this.props.month.name }</span>
        ) // end return
    } // // render
} // end class

export default MonthItem;