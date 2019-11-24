import React from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const handleClick = () => {
      this.props.history.push('/signup');
    };
    const { pathname } = this.props.location;
    if (pathname === '/signup') {
      return (
        <div className="navbar">
          <img src="assets/images/logo.png" alt="Watch flix logo" />
        </div>
      );
    }
    return (
      <div className="navbar">
        <img src="assets/images/logo.png" alt="Watch flix logo" />
        <button onClick={handleClick} className="home-page-signin">Sign In</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
