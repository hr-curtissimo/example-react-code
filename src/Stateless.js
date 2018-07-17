import React, { Fragment, Component } from 'react';

const Stateless = props => {
  return (
    <h1 style={props}>this is {props.name}</h1>
  )
};

export default Stateless;
