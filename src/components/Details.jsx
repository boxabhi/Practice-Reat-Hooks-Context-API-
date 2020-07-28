import React , {useContext} from 'react';
import './detail.css'
import {GithubContent} from '../Context/GithubContext'
function Details(props) {
    const {info} = useContext(GithubContent);
    console.log(info);
    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                <div className="d-flex shadow p-2 text-center pl-4 rounded-lg bg-white" style={{width:'15rem', height:'6rem'}}>
                <i className="far fa-bookmark mr-4 mt-2 icon" style={{color : '#da4a91', background:'pink'}}></i>
                <div className="text">
                <h3 className="font-weight-bold">{info.public_repos}</h3>
                <p className="m-0 p-0">Repo</p>
                </div>
                </div>
                </div>


                <div className="col-lg-3 col-md-6">
                <div className="d-flex shadow p-2 text-center pl-4 rounded-lg bg-white" style={{width:'15rem', height:'6rem'}}>
                <i className="far fa-bookmark mr-4 mt-2 icon" style={{color : '#2caeba', background:'#e0fcff'}}></i>
                <div className="text">
                <h3 className="font-weight-bold">{info.followers}</h3>
                <p className="m-0 p-0">Followers</p>
                </div>
                </div>
                </div>



                <div className="col-lg-3 col-md-6">
                <div className="d-flex shadow p-2 text-center pl-4 rounded-lg bg-white" style={{width:'15rem', height:'6rem'}}>
                <i className="far fa-bookmark mr-4 mt-2 icon" style={{color : '#5d55fa', background:'#e6e6ff'}}></i>
                <div className="text">
                <h3 className="font-weight-bold">{info.following}</h3>
                <p className="m-0 p-0">Following</p>
                </div>
                </div>
                </div>


                <div className="col-lg-3 col-md-6">
                <div className="d-flex shadow p-2 text-center pl-4 rounded-lg bg-white" style={{width:'15rem', height:'6rem'}}>
                <i className="far fa-user mr-4 mt-2 icon" style={{color : '#f0b429', background:'#fffbea'}}></i>
                <div className="text">
                <h3 className="font-weight-bold">{info.public_gists}</h3>
                <p className="m-0 p-0">Gist</p>
                </div>
                </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Details;