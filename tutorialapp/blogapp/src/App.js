import React from 'react';
import Navigate from './Navigate';
import Home from './Home';
import Blog from './Blog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navigate />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
