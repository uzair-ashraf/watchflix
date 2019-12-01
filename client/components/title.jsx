import React from 'react';
import LoadingScreen from './loadingScreen';
import { connect } from 'react-redux';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false
    };
  }
  componentDidMount() {
    const { titleId, genreId } = this.props.match.params;
    const { results } = this.props.movies[genreId].movies;
    const movieData = results.find(movie => {
      return movie.id == titleId;
    });
    console.log(movieData);
  }
  render() {
    return (
      <LoadingScreen loaded={this.state.dataLoaded}/>
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
