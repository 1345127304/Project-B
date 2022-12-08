import React from 'react';
import { useState } from 'react';
import ImageSlider from './ImageSlider';
import {auth} from './firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';




function Home(){

        const images = [
            {url: "http://localhost:3000/coin.jpg", title: "SLUCoin"},
            {url: "http://localhost:3000/shop.jpg", title: "Shop"},
            {url: "http://localhost:3000/slu_logo.jpg", title: "SLU"}
        ]

        const containerStyles = {
            width: "500px",
            height: "280px",
            margin: "0 auto",
        };

        const [user, setUser] = useState({});

        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

        })

        const logOut = async () => {
            await signOut(auth);
            setUser("");
        }


        return(
            <div>
                <h1>Welcome To SLUCoin {user?.email}</h1>
                <div style = {containerStyles}>
                <ImageSlider slides = {images}/>
                </div>
                <div className = "sign-out">
                <button type="Sign Out" className="btn btn-dark btn-lg btn-block" onClick={logOut}>Sign out</button>
                </div>
            </div>
        )
    
} 
export default Home;

