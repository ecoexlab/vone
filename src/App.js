import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Main from './containers/Main/Main';
import OrderStep from './pages/OrderStep';
import OrderConfirm from './pages/OrderConfirm';
import Home from './Home';
import './App.scss';

function App() {

 

  return (
    <div className="App">
        <Navbar>
        </Navbar>
        <div>
            <Route path="/" exact={true} component={Home} />
            <Route path="/main" component={Main} />
            <Route path="/step" component={OrderStep} />
            <Route path="/confirm" component={OrderConfirm} />
        </div>
       
    </div>
  );
}

export default App;

       
         
    

       
       
        
      
     