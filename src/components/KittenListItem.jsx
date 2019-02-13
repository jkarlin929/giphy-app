import React from 'react';

const KittenListItem = (props) => {
  return (
    <div className='kitten-gif'>
      <img src={props.gifData.images.original.url} alt="kittens being cute in gif form" />
    </div>
  );
}


export default KittenListItem;
