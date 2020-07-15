import React from 'react';
import { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './Navigation/nav';
import GenresList from './Genres/genresList';
import Artists from './Artists/artists';
import AddMusic from './AddSong/addSong';
import SignUp from './Auth/signUp';
import SignIn from './Auth/signIn';
import LogOut from './Auth/logOut';
import { getData } from './FetchData/fetchData';
import { Context } from './Context/context';
import './App.css';

function App() {
  const [categories, setCategories] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getData('https://music-recommendation-d8c50.firebaseio.com/.json')
      setCategories(resp.data)
    }
    fetchData()
  },[])
  
  return (
    <Context.Provider value={categories}>
      <Nav />
      <Switch>
          <Route path='/signUp' render={() => <SignUp />}/>
          <Route path='/signIn' render={() => <SignIn />}/>
          <Route path='/logOut' render={() => <LogOut />}/>
          <Route path='/addMusic' render={() => <AddMusic />}/>
          <Route path='/:id' render={() => <Artists />}/>
          <Route path='/' render={() => <GenresList />}/> 
          <Route path='*' render={() => <Nav />}/>    
      </Switch>
    </Context.Provider>
  )
}

export default App;
