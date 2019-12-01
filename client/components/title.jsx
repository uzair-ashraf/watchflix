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

  render() {
    console.log(this.props.match.params.titleId);
    console.log(this.props.movies);
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
