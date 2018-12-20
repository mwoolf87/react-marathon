import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongContainer from './SongContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="app row callout">
          <h2 className="title">React Music Player</h2>
          <div className="row">
            <div className="small-6 columns">
              <h1>Playlists</h1>
              <PlaylistCollection
                playlists={this.props.data.playlists}
              />
            </div>

            <div className="small-6 columns">
              <h1>Song</h1>
              <SongContainer
                songs={this.props.data.songs[0]}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
