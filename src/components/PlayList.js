import React, { Component } from 'react';

import PlayListItem from './PlayListItem';

export default function PlayList(props) {
  let playlist = props.songs.map((song, index)=>{
    return <PlayListItem key={ index } song={ song } />
  });
  return (
    <div className='col-md-6'>
      <input type='submit' value='Update List' onClick={ props.updatePlayList } />
      <ul>
        { playlist }
      </ul>
    </div>
  )
}
