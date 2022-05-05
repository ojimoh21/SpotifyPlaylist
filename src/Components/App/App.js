import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      searchResults: [
        {name: 'Be With You', artist: 'Beyonce', album: 'Crazy in Love', id: 1},
        {name: 'Can U Handle It', artist: 'Usher', album: 'Confessions', id: 2},
        {name: 'U Belong To Me', artist: 'Try Songz', album: 'Anticipation II', id: 3}
      ],
      playlistName: "My Playlists",
      playlistTracks:[
        {name: 'Change', artist: 'Brooke Valentine', album: 'Change', id: 5},
        {name: 'Forever Yours', artist: 'Trey Songz', album: 'Chapter 5', id: 10},
        {name:'Worth It', artist: 'The Weeknd', album: '50 Shades', id: 7}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if (!tracks.find(song => song.id === track.id)){
      tracks.push(track)
    }
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track){
    const tracks = this.state.playlistTracks.filter(song => song.id !== track.id)
    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

   search(term){
    console.log(term);
  }

  render(){
    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar
          onSearch={this.search}
        />
        <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlist={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
        </div>
      </div>
    </div>
  );}
}

export default App;
