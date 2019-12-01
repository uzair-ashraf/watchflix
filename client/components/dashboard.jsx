import React from 'react';
import Navbar from './navbar';
import LoadingScreen from './loadingScreen';
import Carousel from './carousel';
import { retrieveMovies } from '../actions/retrieveMoviesAction';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false
    };
  }
  componentDidMount() {
    this.props.dispatch(retrieveMovies())
      .then(() => this.setState({ dataLoaded: true }));
  }

  render() {
    return (
      <>
        <LoadingScreen loaded={this.state.dataLoaded} />
        <Navbar />
        {this.props.movies.map((movie, index) => {
          return (
            <Carousel
              key={index}
              genre={movie.genre}
              movies={movie.movies.results}
            />
          );
        })}
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

export default connect(mapState)(Dashboard);
