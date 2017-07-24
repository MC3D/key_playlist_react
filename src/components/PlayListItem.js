import React, { Component } from 'react';

export default function PlayListItem(props) {
  return (
    <div>
      { props.song.songTitle } { props.song.userName }
    </div>
  )
}
