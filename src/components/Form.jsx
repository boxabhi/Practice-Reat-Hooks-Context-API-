import React, {useState, useContext} from 'react';
import {GithubContent} from '../Context/GithubContext'



function Form(props) {

    const [fetchuser , setfetchUser] = useState('')
    const {setUser} = useContext(GithubContent)

    const handleSubmit = (e)=>{
        e.preventDefault();
       setUser(fetchuser)
       setfetchUser('')

      }
    return (
        <div className="mb-4 mt-5">
          <form onClick={handleSubmit}>
         <div className="row">
<div className="col-lg-5">
<input type="text" className="form-control p-4" value={fetchuser} onChange={(e)=> setfetchUser(e.target.value)} id="inputPassword2" placeholder="Find User"/>
  
  </div>
         
   
    
  <div className="col-lg-4">
  <button type="submit" className="btn btn-outline-primary mb-2 btn-block p-2">Find</button>
  </div>  
         
         </div>
         </form>
         </div>
            
       
    );
}

export default Form;