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
    if (!this.props.user) this.props.history.push('/signin');
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
              genreId={index}
              movies={movie.movies.results}
            />
          );
        })}
      </>
    );
  }
}

const mapState = state => {
  const { movies, user } = state;
  return {
    movies,
    user
  };
};

export default connect(mapState)(Dashboard);
