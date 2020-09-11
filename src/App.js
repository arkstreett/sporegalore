import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import SporeMicro from './components/SporeMicro'
import ShroomCulture from './components/ShroomCulture'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
      
        
        <BrowserRouter>
          <Navbar/>
          
          <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route path="/checkout" component={Cart}/>
            <Route path="/spores" component={SporeMicro}/>
            <Route path="/culture" component={ShroomCulture}/>
            <Route path="/about" component={About}/>
            
            
            
          </Switch>
        </BrowserRouter>
        
      
    </div>
  );
}

export default App;
