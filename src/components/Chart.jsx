import React from 'react';
import PieChart from './visualize/PieChart.jsx'
import BarChart from './visualize/BarChart'

function Chart(props) {

  
    return (
        <div>
            
        <div className="row mt-5">
            <div className="col-lg-6" style={{height:'350px'}}>
                <div className="shadow bg-light">
                    <PieChart/>
                </div>

            </div>


        <div className="col-lg-6">

        <BarChart/>
        </div>



        </div>

        </div>
    );
}

export default Chart;