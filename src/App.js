import React ,{Component} from 'react';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import {
    BrowserRouter as Router,

    Route,
    
  } from "react-router-dom";

import {GithubProvider} from './Context/GithubContext'
class App extends Component{
    constructor(){
        super();
        this.state = {
          
        }
    }


    render(){
        return(
            <GithubProvider>
           <Router>
                <Route exact path="/" >
                   <Dashboard/>
               </Route>
               <Route path="/login" >
                   <Login/>
               </Route>
               </Router>
            <footer className="bg-primary mt-5 p-3 container-fluid">
            <p className="text-white text-center">Github Profile Search</p>
            </footer>
            </GithubProvider>

        )
    }
}

export default App;