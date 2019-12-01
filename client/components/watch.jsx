import React from 'react';
import Navbar from './navbar';
import LoadingScreen from './loadingScreen';
import axios from 'axios';

export default class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      trailer: null
    };
  }
  componentDidMount() {
    const { titleId } = this.props.match.params;
    axios.get(`/api/video?id=${titleId}`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <>
        <LoadingScreen loaded={this.state.dataLoaded}/>
        <Navbar/>
      </>
    );
  }
}
