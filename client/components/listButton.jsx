import React from 'react';
import { withRouter } from 'react-router-dom';

class ListButton extends React.Component {
  render() {
    return (
      <button className="add-list-button">My List</button>
    );
  }
}

export default withRouter(ListButton);
