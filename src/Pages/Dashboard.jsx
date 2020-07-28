import React from 'react';
import Details from '../components/Details'
import Tabs from '../components/Tabs'
import Charts from '../components/Chart'
import Form from '../components/Form'
function Dashboard(props) {
    return (
        <div className="container">
            <h1>GitFinder</h1>
            
            <Form/>

            <Details/>
            <Tabs/>
            <Charts/>

      
        </div>
    );
}

export default Dashboard;