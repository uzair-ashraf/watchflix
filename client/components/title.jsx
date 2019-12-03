import React from 'react';
import LoadingScreen from './loadingScreen';
import Navbar from './navbar';
import StarRatingComponent from 'react-star-rating-component';
import ListButton from './listButton';
import { addedToList } from '../actions/addedToListAction';
import { connect } from 'react-redux';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      dataLoaded: false,
      movieId: null
    };
    this.addToList = this.addToList.bind(this);
  }

  componentDidMount() {
    const { genreId } = this.props.match.params;
    if (genreId === 'search') {
      const titleId = parseInt(this.props.match.params.titleId);
      const { search } = this.props;
      const movieData = search.find(movie => {
        return movie.id === titleId;
      });
      this.setState({ movie: movieData, dataLoaded: true, movieId: titleId });
    } else if (genreId === 'list') {
      const titleId = parseInt(this.props.match.params.titleId);
      const { list } = this.props;
      const movieData = list.find(movie => {
        return movie.id === titleId;
      });
      this.setState({ movie: movieData, dataLoaded: true, movieId: titleId });
    } else {
      const titleId = parseInt(this.props.match.params.titleId);
      const { results } = this.props.movies[genreId].movies;
      const movieData = results.find(movie => {
        return movie.id === titleId;
      });
      this.setState({ movie: movieData, dataLoaded: true, movieId: titleId });
    }
  }
  addToList() {
    this.props.dispatch(addedToList(this.props.user.user_id, this.state.movie));
  }
  checkList() {
    if (!this.props.list.length) return false;
    return this.props.list.some(movie => {
      return movie.id === this.state.movieId;

    });
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
              <ListButton inList={this.checkList()} addToList={this.addToList}/>
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
  const { movies, search, list, user } = state;
  return {
    movies,
    search,
    list,
    user
  };
};

export default connect(mapState)(Title);
