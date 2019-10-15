import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );
  const [movies] = useState(Movie);


  // function Mov(props) {
    // console.log(props);
  // const movItem = Movie.find(item => item.id === Number(props.match.params.movieID))  
 

  return (
    <div>
      <SavedList list={savedList} />
      <Route path = '/' component = {MovieList}/>
      {/* <Route path = {`/movie/${movItem.id}`} render = {props => <Movie 
          items = {movies}
          match = {props.match}
          history = {props.history}
          location = {props.location}
      />}/>   */}
    
      {/* <Route path = '/movies/:id' 
        render = {props => <Movie {...props} movie={movie} />}/> */}
      <div>Replace this Div with your Routes</div>
    </div>
  );
// }
};

export default App;
