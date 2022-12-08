import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Questions from './components/Questions'
import Newsfeed from './components/Newsfeed'
import Buy from './components/Buy'
import Login from './components/SignIn'
import SignUp from './components/SignUp'
import Footers from './components/Footer';



function App(props) {

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/home'}>
              SLUCoin
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className = "nav-item"> 
                  <Link className = "nav-link" to = {'/home'}>
                    Home
                  </Link>
                </li>
                <li className = "nav-item"> 
                  <Link className = "nav-link" to = {'/questions'}>
                    Questions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/newsfeed'}>
                    Newsfeed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/buy'}>
                    Buy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/home" element = {<Home />} />
              <Route path="/questions" element = {<Questions />} />
              <Route path="/newsfeed" element = {<Newsfeed />} />
              <Route path="/buy" element = {<Buy />} />
              <Route path="/sign-in" element = {<Login />} />
              <Route path="/sign-up" element = {<SignUp />} />
            </Routes>
          </div>
          <Footers/>
        </div>
      </div>
    </Router>
  )
}

export default App
