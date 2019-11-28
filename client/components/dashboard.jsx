import React from 'react';
import Navbar from './navbar';
import axios from 'axios';

export default class Dashboard extends React.Component {
  componentDidMount() {
    axios.get('/api/movies')
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <Navbar/>

    );
  }
}
