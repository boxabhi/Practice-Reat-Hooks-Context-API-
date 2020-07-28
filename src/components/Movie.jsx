import React,{useContext} from 'react';
import {ThemeContext} from '../Context/ThemeContext'


const Movie = () => {
    const value = useContext(ThemeContext) 
    const {isLight , light  , dark} = value
    console.log(isLight, light, dark)
    const movieLists = ['Dark Knight' , 'Superman' , 'Avengers']
    const theme = isLight ? light : dark 
    const movie = movieLists.map((movieList,index)=>
         <li key={index} style={{background : theme}}>movieList</li>
    )
    return (
        <div className="" style={{background : theme}}>
            <div className="shadow-sm  p-4">
            <div className="text-center">
                <h2>Movie List</h2>
              
                {
                movie
                }
            </div>

            </div>
            
        </div>
    );
};

export default Movie;