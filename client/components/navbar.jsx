import React from 'react';

export default class Navbar extends React.Component {
  render() {
    const handleClick = () => {
      this.props.history.push('/signup');
    };
    return (
      <div className="navbar">
        <img src="assets/images/logo.png" alt="Watch flix logo" />
        <button onClick={handleClick} className="home-page-signin">Sign In</button>
      </div>
    );
  }
}
