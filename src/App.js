import React, { useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(true);



  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try{
      const response= await fetch('https://swapi.py4e.com/api/film/')
      if(!response.ok){
        throw new Error('Somthing went wrong...Retrying!');
       }
      
    
      const data = await response.json();

    
      const transformedMovies = data.results.map((movieData) =>{
        return {
          id : movieData.episode_id,
          title : movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate : movieData.release_date,
        };
      });
      setMovies(transformedMovies);
   

    } catch(error){
      setError(error.message);
      setIsLoading(false);

    }
   
}
const cancelRetryingHandler = ()=>{
  if(error){
    content = <p>{retrying && error}</p>
    setRetrying(false);
  }
 
}

let content = <p>Found no movies</p>;

if(movies.length > 0){
  content = <MoviesList movies={movies} />
}
if(error){
  content = <p>{retrying && error}</p>
}
if(isLoading){
  content = <p>Loading...</p>
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      
      <section>
      {content}
      {retrying &&<button onClick={cancelRetryingHandler}>cancel</button>}
      </section>
    </React.Fragment>
  );
}

export default App;
