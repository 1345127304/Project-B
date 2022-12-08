import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Newsfeed extends Component {
    render() {


        return(
            <div class="col-sm-12 col-md-12 col-lg-12">
        <h1> Newsfeed </h1>
        <h4 class = "heading">SLUcoin(9/17/2030)</h4>
            <p class = "content"> 
                Quantity Limit for SLUcoin has increased to 1,000,000
            </p>
            <h4 class = "heading"> Competition(9/03/2030)</h4>
            <p class = "content">
                The result for August 2030 competition is out, congratulation to xxx(login to see the name).
            </p>

            <h4 class = "heading"> SLUcoin Shop</h4>
            <p class = "content">New items available at SLUcoin Shop for 30 days</p>
        </div>
        )
    }
} 