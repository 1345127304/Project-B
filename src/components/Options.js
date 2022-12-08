import React, { Component } from 'react';
import { useState } from 'react';




export default class Options extends Component {
    render() {
        const slides = [
            {url: "http://localhost:3000/coin.jpg", title: "SLUCoin"},
            {url: "http://localhost:3000/shop.jpg", title: "Shop"},
            {url: "http://localhost:3000/slu_logo.jpg", title: "SLU"}
        ]

        const containerStyles = {
            width: "500px",
            height: "280px",
            margin: "0 auto",
        };
        return(
            <div>
                <h1>Welcome To SLUCoin</h1>
                <div style = {containerStyles}>
                <ImageSlider slides = {slides}/>
                </div>
            </div>
        )
    }
} 