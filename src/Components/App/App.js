import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      searchResults: [{name: 'Be With You', artist: 'Beyonce', album: 'Crazy in Love', id: 1}, {name: 'Can U Handle It', artist: 'Usher', album: 'Confessions', id: 2}, {name: 'U Belong To Me', artist: 'Try Songz', album: 'Anticipation II', id: 3}],
      playlistName: "My Playlists",
      playlistTracks:[{name: 'RnB', artist: 'RnB Artists', album: 'RnB', id: 5}, {name: 'Pop', artist: 'Pop artist', album: 'pop', id: 10}, {name:'Rock', artist: 'Rock Artist', album: 'Rock', id: 7}]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if (!tracks.find(song => song.id === track.id)){
      tracks.push(track)
    }
    this.setState({playlistTracks: tracks})
  }

  render(){
    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              />
            <Playlist playlist={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
  );}
}

export default App;
