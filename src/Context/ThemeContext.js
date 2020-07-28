import React, { createContext , useReducer} from  'react';
import {AgeReducer} from './reducers';
export const ThemeContext = createContext()

export const  ThemeContextProvider = (props) =>{


    const [age,dispatch] = useReducer(AgeReducer,5)
    
    
   
        return (

           <ThemeContext.Provider value={{age,dispatch}}>
               {props.children}
              
         </ThemeContext.Provider>

        )
    
}