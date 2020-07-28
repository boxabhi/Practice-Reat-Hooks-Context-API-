import React ,{useContext} from 'react';
import {GithubContent} from '../Context/GithubContext'

function Tabs(props) {
    const {info} = useContext(GithubContent);
   
    return (
        <div>

            <div className="row mt-5">
                <div className="col-lg-6">
                <div className="shadow bg-white">
           
           <div className="container p-4 mx-auto">
                <div className="d-flex">
                <img src={info.avatar_url} className="img-fluid rounded-circle" alt="user" style={{height:'100px', width:'100px'}}></img>

        <div className="ml-4">
                <h4>{info.login}</h4>
                <p>{info.bio}</p>

              

                </div>

      
      <div className="pull-right text-right ml-4"> 
      <button className="btn btn-outline-primary rounded-pill">Follow</button></div>
            </div>


        <div  className="p-4">
            <p>
                <span><i className="fas fa-building"></i></span> {info.location}  </p>
                <p>
                    <span><i className="fas fa-map-marker"></i></span> {info.company}</p>

            <p><span><i className="fas fa-paperclip"></i></span> {info.html_url}</p>
        </div>

         </div>
        </div>
                </div>


<div className="col-lg-6 ">

<div className="shadow-sm bg-white p-4">

<div className="overflow-auto">
{/* 

    { 
    
    arr.map(e =>{
return (
    <div className="container overflow-auto">
    <div className="d-flex p-4">
    <img src="https://assets.leetcode.com/users/abhijeetg40/avatar_1576242737.png" className="rounded-circle img-fluid" style={{height:'60px'}}></img>
    <p className="pt-1 ml-3">Boxabhi <br/> @boxabhi</p>
    </div>
    </div>
)
    })

    } */}
    
</div>

</div>


    </div>


            </div>
           
        </div>
    );
}

export default Tabs;