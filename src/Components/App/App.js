import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Playlist} from './../Playlist/Playlist';
import {SearchBar} from './../SearchBar/SearchBar';
import {SearchResults} from './../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
  render() {
    return (
      <div>
        <h1>La<span className="highlight">La</span>La</h1>
          <div className="App">
          <SearchBar />
            <div className="App-playlist">
            <{this.state.SearchResults} />
            <Playlist />
    </div>
  </div>
</div>
    );
  }
}
}

export default App;
