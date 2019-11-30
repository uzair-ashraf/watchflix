import React from 'react';

export default class carouselItem extends React.Component {
  render() {
    return (
      <div
        className="movie"
        style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${this.props.image}")` }}
      />
    );
  }
}
