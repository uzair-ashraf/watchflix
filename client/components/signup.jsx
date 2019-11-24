import React from 'react';
import Navbar from './navbar';

export default class SignUp extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className="sign-up-heading">
        Sign Up
      </div>
      <form>
        <select>
          <option>Select User</option>
          <option>uzinatorcl</option>
          <option>thebearingedge</option>
        </select>
      </form>
      </>
    );
  }
}
