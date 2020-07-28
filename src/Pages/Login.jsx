import React from 'react';

function Login(props) {
    return (
        <div className="mx-auto text-center col-6">
        <div className="shadow-sm bg-white p-5">
           
            <p>Login with Github</p>
            <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=4ba6e295e3b74d2e34b3">
   
            <button className="btn btn-dark btn-block">Github</button>
</a>
        </div>
        </div>
    );
}

export default Login;