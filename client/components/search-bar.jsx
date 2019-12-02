import React from 'react';
import axios from 'axios';

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
    if (!this.state.query) return;
    const query = encodeURI(this.state.query);
    axios.get(`/api/search/?query=${query}`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
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
