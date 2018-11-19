import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.search = this.search.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    let trackPlayList = false;
    this.state.playlistTracks.forEach(playlistTrack => {
      if (playlistTrack.id === track.id) {
        trackPlayList = true;
        }
      }
    );

    removeTrack(track) {
      let updatePlaylist = this.state.playlistTracks.filter(playlistTrack => {
        return playlistTrack.id !== track.id;
      });
      this.setState({playlistTracks: updatePlaylist});
    }

    updatePlaylistName(name) {
      this.setState({playlistName: name});
    }

    savePlaylist() {
        let trackURIs = [];
        this.state.playlistTracks.forEach(playlistTrack => {
          trackURIs.push(playlistTrack.uri);
        });
        Spotify.savePlaylist(this.state.playlistName, trackURIs);
        this.setState({playlistTracks:[], playlistName: 'New Playlist', searchResults:[]});
      }

      search(term) {
        console.log(term);
      }

  render() {
    return (
      <div>
        <h1>La<span className="highlight">La</span>La</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
