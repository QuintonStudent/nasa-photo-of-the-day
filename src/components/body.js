import React from "react";

const Body = ({ propsUrl, propsMediaType }) => {

  if(propsMediaType === 'video') {
    return (
      <iframe className='imgVideo' width='420' height='315'
        src={propsUrl}>
      </iframe>
    )
  }
  else {
    return (
      <img className='imgVideo' src={propsUrl} />
    )
  }
};

export default Body;
