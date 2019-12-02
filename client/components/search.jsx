import React from 'react';
import axios from 'axios';
import LoadingScreen from './loadingScreen';
import Navbar from './navbar';

export default class Search extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const query = encodeURI(this.props.match.params.query);
    axios.get(`/api/search/?query=${query}`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <>
      <LoadingScreen loaded={false}/>
      <Navbar/>
      <div className="search-title">

      </div>
      </>
    );
  }
}
