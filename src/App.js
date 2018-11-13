import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import PostsFeedPage from './pages/PostsFeed';

import './App.css';

library.add(faSignInAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/feed" component={PostsFeedPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
