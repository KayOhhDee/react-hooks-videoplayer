import React from 'react';
import Player from './Player';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Player} />
      <Route exact path="/:currentVideo" component={Player} />
    </Switch>
  </BrowserRouter>
)

export default App;