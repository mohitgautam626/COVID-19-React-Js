import React from 'react';
import './App.css';
import './component/covid.css';
import Home from './component/home';
import Country from './component/country';
import District from './component/district';
import logo from './component/images/logo.png';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  const h=80,w=80;
  return (
    <div className="App">
    <div className="d1">
  <div className="row">
  <div className="col-sm-1 d11">
  <img src={logo} height={h} width={w} alt="logo"/>
</div>
<div className="col-sm-6 d12">
  <h1><b>CORONA-O-PEDIA</b></h1>
</div>
</div>
</div>
      <Router>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/country" component={Country}/>
      <Route path="/district" component={District}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
