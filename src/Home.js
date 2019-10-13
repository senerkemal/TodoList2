import React, { Component } from 'react';
import './App.css';
import Login from './Login';

class Home extends Component {
    
    render() { 
        return ( 
            <div className="Home">
                <Login/>
            </div>
         );
    }

}
 
export default Home;