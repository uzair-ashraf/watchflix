import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './homepage';
import SignIn from './signin';
import Dashboard from './dashboard';
import Title from './title';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path ="/" component={HomePage}/>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/title/:genreId/:titleId" component={Title} />
        </Router>
      </div>
    );
  }
}
