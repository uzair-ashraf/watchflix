import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './homepage';
import SignIn from './signin';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path ="/" component={HomePage}/>
          <Route exact path="/signin" component={SignIn} />
        </Router>
      </div>
    );
  }
}