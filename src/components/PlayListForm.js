import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this._addToList = this._addToList.bind(this);
  }

  _addToList(event) {
    event.preventDefault();
    this.props.addToList({
        userName: event.target.userName.value,
        songTitle: event.target.songTitle.value,
        songArtist: event.target.songArtist.value,
        songNotes: event.target.songNotes.value
    });
  }

  render() {
    return (
      <form className='col-md-6' onSubmit={ this._addToList }>
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input type="text" className="form-control" id="userName" placeholder="Name or User Name" name='userName' />
        </div>
        <div className="form-group">
          <label htmlFor="bandName">Artist/Band</label>
          <input type="text" className="form-control" id="bandName" placeholder="Artist or Band Name" name='songArtist' />
        </div>
        <div className="form-group">
          <label htmlFor="songTitle">User Name</label>
          <input type="text" className="form-control" id="songTitle" placeholder="Song Title" name='songTitle' />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes About Song</label>
          <textarea className="form-control" id="notes" name='songNotes' />
        </div>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
