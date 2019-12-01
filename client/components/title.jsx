import React from 'react';
import LoadingScreen from './loadingScreen';
import Navbar from './navbar';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      dataLoaded: false,
      movieId: null
    };
  }
  componentDidMount() {
    const { genreId } = this.props.match.params;
    const titleId = parseInt(this.props.match.params.titleId);
    const { results } = this.props.movies[genreId].movies;
    const movieData = results.find(movie => {
      return movie.id === titleId;
    });
    this.setState({ movie: movieData, dataLoaded: true, movieId: titleId });
  }
  render() {
    const handleClick = () => this.props.history.push(`/watch/${this.state.movieId}`);
    return (
      <>
      <LoadingScreen loaded={this.state.dataLoaded}/>
      <Navbar/>
        {this.state.movie
          ? (
            <>
            <div className="movie-title">
              {this.state.movie.title}
            </div>
            <div
              style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}")` }}
              className="movie-image"
            />
            <div className="movie-button-container">
              <button onClick={handleClick} className="play-button">Play</button>
              <button className="add-list-button">My List</button>
            </div>
            <div className="movie-rating">
              <StarRatingComponent
                name="movie-rating"
                editing={false}
                starCount={5}
                value={Math.ceil(this.state.movie.vote_average / 2)}
              />
            </div>
            <div className="movie-summary">
              {this.state.movie.overview}
            </div>
            </>
          ) : (
            null
          )}
      </>
    );
  }
}

const mapState = state => {
  const { movies } = state;
  return {
    movies
  };
};

export default connect(mapState)(Title);
