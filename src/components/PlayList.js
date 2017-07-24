import React, { Component } from 'react';

import PlayListItem from './PlayListItem';

export default class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
    this._updatePlayList = this._updatePlayList.bind(this);
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

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    });
  }

  render() {
    let playlist = this.state.songs.map((song, index)=>{
      return <PlayListItem key={ index } song={ song } />
    })
    return (
      <div className='col-md-6'>
        <input type='submit' value='Update List' onClick={ this._updatePlayList } />
        <ul>
          { playlist }
        </ul>
      </div>
    )
  }
}
