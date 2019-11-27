import React from 'react';

export default class Carousel extends React.Component {
  render() {
    return (
      <div className="carouselContainer">
        <div className="movieGroupTitle">
          {this.props.title}
        </div>
        <div className="movieGroup">
          <div className="movie">

          </div>
        </div>
      </div>
    );
  }
}
