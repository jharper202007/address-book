import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ContactList from './components/ContactList';
import SearchResults from './components/SearchResults';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Router>
      <Navigation />
      <div className="container">
        <div className="row mt-5">
          <Switch>
            <Route path="/search">
              <SearchResults />
            </Route>
            <Route path="/">
              <ContactList />
              </Route>
          </Switch>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
