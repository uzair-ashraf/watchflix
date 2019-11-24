import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img src="assets/images/logo.png" alt="Watch flix logo" />
        <button className="home-page-signin">Sign In</button>
      </div>
    );
  }
}
