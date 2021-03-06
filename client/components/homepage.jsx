import React from 'react';
import Navbar from './navbar';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page-container">
        <Navbar/>
        <div className="landing-page">
          <div className="landing-main-header">
            Unlimited movies, TV shows, and more.
          </div>
          <div className="landing-main-subheader">
            Watch anywhere. Cancel anytime.
          </div>
          <span>
            <button className="landing-button">TRY 30 DAYS FREE</button>
          </span>
        </div>
      </div>
    );
  }
}
