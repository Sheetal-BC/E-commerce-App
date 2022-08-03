import React, {useRef} from "react";

import './AddMovie.css';



const AddMovie = (props) =>{

    const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');
 
   const onSubmitHandler = (event) =>{
    event.preventDefault();

    const movie = {
    title: titleRef.current.value,
    openingText: openingTextRef.current.value,
    releaseDate: releaseDateRef.current.value,
  };
   props.onAddMovie(movie);

}


    return (
        <form onSubmit={onSubmitHandler}>
           
                <div className="movie">
                <label htmlFor="title">Title</label>
                <input type='text' ref={titleRef}/>
                </div>
                <div className="movie">
                <label htmlFor="opening-text">Opening Text</label>
                <textarea row='6' ref={openingTextRef}></textarea>
                </div>
                <div className="movie">
                <label htmlFor="date" >Release Date</label>
                <input type='text' ref={releaseDateRef}/>
                </div>
                <button>Add Movie</button>
         </form>
    )
}

export default AddMovie;