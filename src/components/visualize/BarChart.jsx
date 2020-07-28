import React,{useContext} from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import {GithubContent} from '../../Context/GithubContext'


function BarChart(props) {
    charts(FusionCharts);
    const {repo} = useContext(GithubContent)
    
  
    const data  = repo.map(re =>{
      
      return {'lable' : re.name , 'value' : re.size}
    })
    console.log(data)

const dataSource = {
    chart: {
      caption: "Repo",
      xaxisname: "Size",
      yaxisname: "Repo",
      numbersuffix: "K",
      theme: "fusion"
    },
    data: data
  };
  
    return (
        <div>
             <ReactFusioncharts
             className="shadow-lg"
        type="column2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
        </div>
    );
}



export default BarChart;