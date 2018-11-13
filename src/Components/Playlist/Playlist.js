import React from 'react';
import Tracklist from './components/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <!-- Add a TrackList component -->
        // <Tracklist />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
    )
  }
}

export default PlayList;
