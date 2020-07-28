import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

function PieChart(props) {
    charts(FusionCharts);
    
    const dataSource = {
        chart: {
          caption: "Market Share of Web Servers",
          plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
          showlegend: "1",
          showpercentvalues: "1",
          legendposition: "bottom",
          usedataplotcolorforlabels: "1",
          theme: "candy"
        },
        data: [
          {
            label: "Apache",
            value: "32647479"
          },
          {
            label: "Microsoft",
            value: "22100932"
          },
          {
            label: "Zeus",
            value: "14376"
          },
          {
            label: "Other",
            value: "18674221"
          }
        ]
      };
    return (
        <div>
              <ReactFusioncharts className=""
        type="doughnut2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
        </div>
    );
}

export default PieChart;