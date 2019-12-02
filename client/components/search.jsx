import React from 'react';
import axios from 'axios';
import LoadingScreen from './loadingScreen';
import Navbar from './navbar';
import { searchMovies } from '../actions/searchMoviesAction';
import { connect } from 'react-redux';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      query: null,
      results: []
    };
  }
  componentDidMount() {
    const { query } = this.props.match.params;
    const encodedQuery = encodeURI(query);
    this.props.dispatch(searchMovies(query))
      .then(() => console.log(this.props));
    // axios.get(`/api/search/?query=${encodedQuery}`)
    //   .then(res => console.log(res.data.results))
    //   .catch(err => console.error(err));

  }
  render() {
    return (
      <>
      <LoadingScreen loaded={this.state.dataLoaded}/>
      <Navbar/>
      <div className="search-title">

      </div>
      </>
    );
  }
}

const mapState = state => {
  const { search } = state;
  return {
    search
  };
};

export default connect(mapState)(Search);
