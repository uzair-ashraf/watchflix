import React from 'react';
import { withRouter } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

class ListButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      makingRequest: false
    };
  }
  render() {
    const icon = this.props.inList
      ? <CheckIcon/>
      : <AddIcon/>;
    const handleClick = () => {
      this.setState({ makingRequest: true }, () => {
        this.props.addToList();
      });
    };
    return (
      <button
        disabled={this.state.makingRequest}
        className="add-list-button"
        onClick={handleClick}
      >
        {icon} My List
      </button>
    );
  }
}

export default withRouter(ListButton);
