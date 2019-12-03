import React from 'react';
import { withRouter } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

class ListButton extends React.Component {
  render() {
    const icon = this.props.inList
      ? <CheckIcon/>
      : <AddIcon/>;
    return (
      <button className="add-list-button">{icon} My List</button>
    );
  }
}

export default withRouter(ListButton);
