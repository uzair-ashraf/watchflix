import React from 'react';
import LoadingScreen from './loadingScreen';
import Navbar from './navbar';
import StarRatingComponent from 'react-star-rating-component';
import ListButton from './listButton';
import { addedToList } from '../actions/addedToListAction';
import { deletedFromList } from '../actions/deletedFromListAction';
import { connect } from 'react-redux';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      dataLoaded: false,
      movieId: null,
      inList: false
    };
    this.addToList = this.addToList.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
  }

  componentDidMount() {
    const { genreId } = this.props.match.params;
    if (genreId === 'search') {
      const titleId = parseInt(this.props.match.params.titleId);
      const { search } = this.props;
      const movieData = search.find(movie => {
        return movie.id === titleId;
      });
      this.loadMovieData(movieData, titleId);
    } else if (genreId === 'list') {
      const titleId = parseInt(this.props.match.params.titleId);
      const { list } = this.props;
      const movieData = list.find(movie => {
        return movie.id === titleId;
      });
      this.loadMovieData(movieData, titleId);
    } else {
      const titleId = parseInt(this.props.match.params.titleId);
      const { results } = this.props.movies[genreId].movies;
      const movieData = results.find(movie => {
        return movie.id === titleId;
      });
      this.loadMovieData(movieData, titleId);
    }
  }
  loadMovieData(movieData, titleId) {
    this.setState({ movie: movieData, dataLoaded: true, movieId: titleId }, () => {
      this.checkList();
    });
  }
  addToList() {
    this.props.dispatch(addedToList(this.props.user.user_id, this.state.movie))
      .then(() => this.setState({ inList: true }));
  }
  deleteFromList() {
    this.props.dispatch(deletedFromList(this.props.user.user_id, this.state.movieId))
      .then(() => this.checkList());
  }
  checkList() {
    if (!this.props.list.length) {
      this.setState({ inList: false });
      return;
    }
    const inList = this.props.list.some(movie => {
      return movie.id === this.state.movieId;
    });
    this.setState({ inList });
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
              <ListButton
                inList={this.state.inList}
                addToList={this.addToList}
                deleteFromList={this.deleteFromList}
              />
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
