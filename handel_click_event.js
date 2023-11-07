// exp-8  Write a program in React JS to handle click event by building a navigation menu.
// App.js file
import logo from './logo.svg';
import React from 'react' ;
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Component} from 'react';
import Counter from './components/Counter';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/user" element={<Users />}/>
          <Route path="/Counter" element={<Counter />}/>
        </Routes>
      </Router>
    </div>
  );
}

// About.js file 
import React from 'react';
export default function About(){
    return (
        <div className='about'>
            <h1>This is the About Page</h1>
        </div>
    )
}
// Uesrs.js file 
import React from "react";
export default function Users(){
    return (
        <div className="Users" >
            <h1>This is Users page</h1>
        </div>
    )
}

// Counter.js file 
import React from 'react';
export default function Counter(){
    return (
        <div className='Counter'>
            <h1>This is Counter Page</h1>
        </div>
    )
}

// Home.js file 
import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <div className='Home'>
        <nav>
        <ul>
           <li> <Link to="/">Home</Link></li>
           <li> <Link to="/about">About</Link></li>
           <li> <Link to="/user">Users</Link></li>
           <li> <Link to="/Counter">Count</Link></li>
        </ul>
        </nav>
        </div>
    )
}