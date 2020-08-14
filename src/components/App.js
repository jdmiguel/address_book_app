import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

/**
 * Main component in charge of handling the different routes of the application
 * @component App
 */

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/settings" component={SettingsPage} />
    </Switch>
  </Router>
);

export default App;
