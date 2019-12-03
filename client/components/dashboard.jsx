import React from 'react';
import Navbar from './navbar';
import LoadingScreen from './loadingScreen';
import Carousel from './carousel';
import { retrieveMovies } from '../actions/retrieveMoviesAction';
import { getInitialList } from '../actions/getInitialListAction';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false
    };
  }
  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/signin');
      return;
    }
    this.props.dispatch(getInitialList(this.props.user.user_id))
      .then(() => {
        this.props.dispatch(retrieveMovies())
          .then(() => {
            console.log(this.props.list);
            console.log(this.props.movies);
            this.setState({ dataLoaded: true });
          });
      });

  }

  render() {
    const list = this.props.list.length
      ? (
        <Carousel
          genre={'My List'}
          genreId={'list'}
          movies={this.props.list}
        />
      )
      : (
        null
      );
    return (
      <>
        <LoadingScreen loaded={this.state.dataLoaded} />
        <Navbar />
        {list}
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
  const { movies, user, list } = state;
  return {
    movies,
    user,
    list
  };
};

export default connect(mapState)(Dashboard);
