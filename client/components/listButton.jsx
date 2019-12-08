import React from 'react';
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
  componentDidMount() {
    this.setState({ inList: this.props.inList });
  }
  componentDidUpdate(prevProps) {
    if (this.props.inList !== prevProps.inList) {
      this.setState({ inList: this.props.inList, makingRequest: false });
    }
  }
  render() {
    const icon = this.state.inList
      ? <CheckIcon/>
      : <AddIcon/>;
    const handleClick = this.state.inList
      ? () => {
        this.setState({ makingRequest: true }, () => {
          this.props.deleteFromList();
        });
      }
      : () => {
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

export default ListButton;
