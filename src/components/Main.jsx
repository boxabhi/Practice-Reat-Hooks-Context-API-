import React, {useContext} from 'react';

import {ThemeContext} from '../Context/ThemeContext'



function Main(props) {

    const {age ,dispatch} = useContext(ThemeContext)
   

    const increase = ()=>{
      dispatch({type:'ADD_5'})
    }
    const decrease = ()=>{
       dispatch({type:'DEC_5'})
    }

    return (
        <div className="container text-center">

            { age > 18 ? <h1>You can Vote </h1> : ''}
         <h2>My age is : {age}</h2>
        
        <button className="btn btn-success" onClick={increase}>Increase Age</button>

        <button className="btn btn-danger" onClick={decrease}>Decrease Age</button>
         </div>
    );
}

export default Main;