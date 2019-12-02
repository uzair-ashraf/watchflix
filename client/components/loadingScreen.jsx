import React from 'react';

export default class LoadingScreen extends React.Component {
  render() {
    const hidden = this.props.loaded ? 'hidden' : '';
    return (
      <div className={`loading-screen ${hidden}`}/>
    );
  }
}
