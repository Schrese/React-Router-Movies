import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );
  const [movie, setMovie] = useState();

 

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = '/' component = {MovieList}/>
        
      <Route path = '/movies/:id' 
        render = {props => <Movie {...props} movie={movie} />}/>
      <div>Replace this Div with your Routes</div>
    </div>
  );

};

export default App;
