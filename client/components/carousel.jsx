import React from 'react';
import CarouselItem from './carouselItem';

export default class Carousel extends React.Component {
  generateItems() {

  }
  render() {
    return (
      <div className="carousel-container">
        <div className="movie-group-genre">
          {this.props.genre}
        </div>
        <div className="movie-group">
          {this.props.movies.map(movie => {
            return (
              <CarouselItem
                key={movie.id}
                title={movie.title}
                image={movie.backdrop_path || movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
