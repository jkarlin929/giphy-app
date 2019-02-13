import React from 'react';
import KittenListItem from './KittenListItem';

const KittenList = (props) => {
  return (
    <div className="kitten-list">
      <h2>I am a KittenList Component</h2>
      {props.kittenData.map(gifData =>

        <KittenListItem key={gifData.id} gifData={gifData} />
      )}
    </div>
  )
}

export default KittenList;
