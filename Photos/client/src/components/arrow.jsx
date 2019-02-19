import React from 'react'


const Arrow = ({ direction, clickFunction}) => (
  <div
    className={ `${direction}` }
    onClick={ clickFunction }>
    <img src= 'https://s3-us-west-1.amazonaws.com/lcchou2/Screen+Shot+2019-02-17+at+4.47.03+PM.png'></img>
  </div>
);

export default Arrow