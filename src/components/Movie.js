import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <React.Fragment>
  
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      
    </li>
    <button onClick={props.onDelete}>Delete</button>
    </React.Fragment> 
  
  );
};

export default Movie;
