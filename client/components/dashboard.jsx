import React from 'react';
import Navbar from './navbar';
import LoadingScreen from './loadingScreen';
import Carousel from './carousel';
import { retrieveMovies } from '../actions/retrieveMoviesAction';
import { connect } from 'react-redux';
import axios from 'axios';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      movieData: []
    };
  }
  componentDidMount() {
    axios.get('/api/movies')
      .then(res => {
        console.log(res.data);
        this.setState({ dataLoaded: true, movieData: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <LoadingScreen loaded={this.state.dataLoaded} />
        <Navbar />
        {this.state.movieData.map((movie, index) => {
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
