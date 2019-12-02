import React from 'react';
import LoadingScreen from './loadingScreen';
import Navbar from './navbar';
import CarouselItem from './carouselItem';
import { searchMovies } from '../actions/searchMoviesAction';
import { connect } from 'react-redux';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      query: null
    };
  }
  componentDidMount() {
    const { query } = this.props.match.params;
    this.props.dispatch(searchMovies(query))
      .then(() => this.setState({ dataLoaded: true, query }));
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
          Search results for: &quot;{this.state.query}&quot;
      </div>
      <div className="search-results">
        {
          this.props.search.length
            ? (
              this.props.search.map(result => {
                return (
                  <CarouselItem
                    key={result.id}
                    id={result.id}
                    genreId={'search'}
                    image={result.backdrop_path || result.poster_path}
                  />
                );
              })
            )
            : (
              'No results found'
            )
        }
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
