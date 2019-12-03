import React from 'react';
import { withRouter } from 'react-router-dom';

class ListButton extends React.Component {
  render() {
    const message = this.props.inList
      ? 'Remove from List'
      : 'Add to List';
    return (
      <button className="add-list-button">{message}</button>
    );
  }
}

export default withRouter(ListButton);
