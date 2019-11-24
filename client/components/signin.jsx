import React from 'react';
import Navbar from './navbar';

export default class SignIn extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className="signin-heading">
        Sign In
      </div>
        <form className="signin-form">
          <select className="signin-dropdown">
            <option>Select User</option>
            <option>uzinatorcl</option>
            <option>thebearingedge</option>
          </select>
          <button className="signin-button">Sign In</button>
        </form>
      </>
    );
  }
}
