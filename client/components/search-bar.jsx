import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.trackQuery = this.trackQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  trackQuery(e) {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.query);
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
