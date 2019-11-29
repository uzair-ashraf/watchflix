import React from 'react';
import CarouselItem from './carouselItem';

export default class Carousel extends React.Component {
  generateItems() {

  }
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
