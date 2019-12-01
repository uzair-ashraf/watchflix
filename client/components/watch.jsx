import React from 'react';
import Navbar from './navbar';
import Youtube from 'react-youtube';
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
      .then(res => {
        const trailer = res.data.results.find(trailer => trailer.site === 'YouTube');
        this.setState({ trailer });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <>
        <LoadingScreen loaded={this.state.dataLoaded}/>
        <Navbar/>
        <div className="movie-watch">
          {this.state.trailer
            ? (
              <Youtube
                videoId={this.state.trailer.key}
                onReady={() => this.setState({ dataLoaded: true })}
                opts={{
                  width: '100%',
                  height: '100%'
                }}
              />
            )
            : (
              null
            )
          }
        </div>
      </>
    );
  }
}
