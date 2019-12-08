import React from 'react';
import { withRouter } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

class ListButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      makingRequest: false,
      inList: false
    };
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.inList);
    if (this.props.inList !== prevProps.inList) {
      this.setState({ inList: this.props.inList });
    }
  }
  componentDidMount() {
    console.log(this.props.inList);
    this.setState({ inList: this.props.inList });
  }
  render() {
    console.log(this.props.inList);
    const icon = this.state.inList
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
