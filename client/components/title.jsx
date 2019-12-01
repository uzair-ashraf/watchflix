import React from 'react';
import LoadingScreen from './loadingScreen';
import Navbar from './navbar';
import { connect } from 'react-redux';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      dataLoaded: false
    };
  }
  componentDidMount() {
    const { genreId } = this.props.match.params;
    const titleId = parseInt(this.props.match.params.titleId);
    const { results } = this.props.movies[genreId].movies;
    const movieData = results.find(movie => {
      return movie.id === titleId;
    });
    console.log(movieData);
    this.setState({ movie: movieData, dataLoaded: true });
  }
  render() {
    return (
      <>
      <LoadingScreen loaded={this.state.dataLoaded}/>
      <Navbar/>
        {this.state.movie
          ? (
            <div className="movie-image">
              fghdsfgh
            </div>
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
