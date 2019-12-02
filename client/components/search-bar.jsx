import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.trackQuery = this.trackQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  trackQuery(e) {
    this.setState({ query: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.query) return;
    const query = encodeURI(this.state.query);
    this.setState({ query: '' }, () => this.props.history.push(`/search/${query}`));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="search-bar"
          value={this.state.query}
          onChange={this.trackQuery}
          name="query"
          placeholder="Search"
        />
      </form>
    );
  }
}

export default withRouter(SearchBar);
