import React from 'react';
import {Route} from 'react-router-dom';
import Ordertest from './Ordertest';
import Navbar from './Navbar';
import Home from './Home';
import './App.scss';

function App() {

 

  return (
    <div className="App">
        <Navbar>
        </Navbar>
        <div>
            <Route path="/" exact={true} component={Home} />
            <Route path="/test" component = {Ordertest} />
        </div>
       
    </div>
  );
}

export default App;

       
         
    

       
       
        
      
     