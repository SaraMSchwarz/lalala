import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './components/Playlist'
import SearchBar from './components/Searchbar'
import SearchResults from './components/Searchresults'

class App extends Component {
  render() {
    return (
      <div>
        <h1>La<span className="highlight">La</span>La</h1>
          <div className="App">
          <!-- Add a SearchBar component -->
            <div className="App-playlist">
            <!-- Add a SearchResults component -->
            <!-- Add a Playlist component -->
    </div>
  </div>
</div>
    );
  }
}

export default App;
