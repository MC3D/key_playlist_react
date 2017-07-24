import React, { Component } from 'react';

// export default class PlayListItem extends Component {
//
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }

export default function PlayListItem(props) {
  return (
    <div>{props.song.songTitle}</div>
  )
}
