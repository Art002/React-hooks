import React from 'react';
import { useContext } from 'react';
import classes from './genresList.module.css';
import GenrePlate from './GenrePlate/genrePlate';
import { Context } from './../Context/context';
import Header from './../Header/header'
 
const GenresList = () => {
    const categories = useContext(Context)
    
    const categoriesList = Object.keys(categories).map((name , i) => {
        return <GenrePlate name={name} key={i}/>
    })
    
    return (
        <div className={classes.genresList}>
            <Header />
            {categoriesList}
        </div>
    )
}   

export default GenresList