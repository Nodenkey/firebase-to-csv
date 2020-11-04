import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/home"
import Dashboard from './components/dashboard';
import Admin from './components/admin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
    </div>
  );
}

export default App;
