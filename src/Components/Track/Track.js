import React from 'react';
import './Track.css';


class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        <a className="Track-action"></a>
      </div>
  )}
  renderAction() {
    if (isRemoval === true) {
    console.log <a="">-</a>
  } else {
    console.log <a="">+</a>
  }
}
}

export default Track;