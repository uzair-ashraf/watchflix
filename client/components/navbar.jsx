import React from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const handleClick = () => {
      this.props.history.push('/signin');
    };
    const { pathname } = this.props.location;
    let navbarSecondbutton = null;
    switch (pathname) {
      case '/':
        navbarSecondbutton = (
          <button onClick={handleClick} className="home-page-signin">Sign In</button>
        );
        break;
      case '/dashboard':
        navbarSecondbutton = (
          <input className="search-bar" placeholder="Search" />
        );
        break;
    }
    return (
      <div className="navbar">
        <img src="assets/images/logo.png" alt="Watch flix logo" />
        {navbarSecondbutton}
      </div>
    );
  }
}

export default withRouter(Navbar);
