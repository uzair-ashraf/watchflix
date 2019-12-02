import React from 'react';
import { withRouter } from 'react-router-dom';

class carouselItem extends React.Component {
  render() {
    const handleClick = () => {
      this.props.history.push(`/title/${this.props.genreId}/${this.props.id}`);
    };
    return (
      <div
        onClick={ handleClick }
        className={this.props.class}
        style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${this.props.image}")` }}
      />
    );
  }
}

export default withRouter(carouselItem);
