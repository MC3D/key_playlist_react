import React, { Component } from 'react';
import './../styles/App.css';

import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
    this._updatePlayList = this._updatePlayList.bind(this);
    this._addToList = this._addToList.bind(this);
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    });
  }

  _updatePlayList(event) {
    event.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({ songs: data });
      console.log("state", this.state.songs);
    });
  }

  _addToList(event) {
    event.preventDefault();

    let listItem = JSON.stringify({
        userName: event.target.userName.value,
        songTitle: event.target.songTitle.value,
        songArtist: event.target.songArtist.value,
        songNotes: event.target.songNotes.value
    });

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm addToList={ this._addToList }/>
        <PlayList songs={ this.state.songs } updatePlayList={ this._updatePlayList } />
      </div>
    );
  }
}

export default App;
