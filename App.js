import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Custlist from './components/Custlist';
import Training from './components/Training';
import Navigator from './components/Navigator';
import Home from './components/Home';

import {BrowserRouter, Switch, Route,} from "react-router-dom";
import Custs from './components/Custs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div>
      <Navigator />

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/training"component={Training}/>
      <Route path="/customers"component={Custs} />
      <Route render={() => <h1>Page not found</h1>}/>
      </Switch>

    
      </div>

      </BrowserRouter>

    </div>
    
  );
}

export default App;
