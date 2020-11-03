import React, { Component } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import VideoDetail from '../Components/VideoDetail/VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.onFormSubmit('buildings');
  }

  onFormSubmit = async term => {
    const res = await youtube.get('/search', {
      params: { q: term },
    });

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
}

export default App;
