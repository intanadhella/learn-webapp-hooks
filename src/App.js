import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact> 
            <Home />
          </Route>
          <Route path="/test">
            <p>test</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
