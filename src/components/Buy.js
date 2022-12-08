import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Buy extends Component{
    render() {
        return(

            <div className = "deal col-lg-12 col-md-12 col-sm-12 " >
            <div> 
            <h1>Current Limit: 623</h1> 
            </div>
            <div className = "sidebyside col-lg-2 col-md-2 col-sm-2">
                <h3>Deal 1</h3><p>$2.99 for 1 SLUcoin</p>
            </div>
            <div className = "sidebyside col-lg-2 col-md-2 col-sm-2">
                <h3>Deal 2</h3><p>$23.99 for 10 SLUcoin</p>
            </div>
            <div className = "sidebyside col-lg-2 col-md-2 col-sm-2">
                <h3>Deal 3</h3><p>$109.99 for 50 SLUcoin</p>
            </div>
            <div className = "sidebyside col-lg-2 col-md-2 col-sm-2">
                <h3>Deal 4</h3><p>$209.99 for 100 SLUcoin</p>
            </div>
            <div className = "sidebyside col-lg-2 col-md-2 col-sm-2">
                <h3>Deal 5</h3><p>$499.99 for 250 SLUcoin</p>
            </div>



            </div>

            
        )
    }
}