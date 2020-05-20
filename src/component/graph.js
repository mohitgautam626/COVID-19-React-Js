import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import axios from 'axios';

class Ch extends Component{
render(){
  return(
    <div>
    <Chart
  width={'500px'}
  height={'400px'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'date', label: 'Day' },
      'Cases',
    ],
    [new Date(2020,2,1), 88585],
    [new Date(2020,2,2), 90443],
    [new Date(2020,2,3), 93016],
    [new Date(2020,2,4), 95314],
    [new Date(2020,2,5), 98425],
    [new Date(2020,2,6), 102050],
    [new Date(2020,2,7), 106099],
    [new Date(2020,2,8), 109991],
    [new Date(2020,2,9), 114382],
    [new Date(2020,2,10), 118950],
    [new Date(2020,2,11), 126215],
    [new Date(2020,2,12), 134510],
    [new Date(2020,2,13), 145417],
    [new Date(2020,2,14), 156477],
    [new Date(2020,2,15), 169516],
    [new Date(2020,2,16), 182440],
    [new Date(2020,2,17), 198171],
    [new Date(2020,2,18), 218863],
    [new Date(2020,2,19), 245019],
    [new Date(2020,2,20), 275733],
    [new Date(2020,2,21), 305202],
    [new Date(2020,2,22), 337705],
    [new Date(2020,2,23), 379236],
    [new Date(2020,2,24), 423114],
    [new Date(2020,2,25), 471721],
    [new Date(2020,2,26), 532807],
    [new Date(2020,2,27), 597457],
    [new Date(2020,2,28), 664331],
    [new Date(2020,2,29), 724876],
    [new Date(2020,2,30), 789130],
    [new Date(2020,2,31), 863184],
    [new Date(2020,3,1), 940523],
    [new Date(2020,3,2), 1020920],
    [new Date(2020,3,3), 1117272],
    [new Date(2020,3,4), 1201186],
    [new Date(2020,3,5), 1274854],
    [new Date(2020,3,6), 1346822],
    [new Date(2020,3,7), 1429982],
    [new Date(2020,3,8), 1514776],
    [new Date(2020,3,9), 1600590],
    [new Date(2020,3,10), 1694667],
    [new Date(2020,3,11), 1775429],
    [new Date(2020,3,12), 1847796],
    [new Date(2020,3,13), 1919174],
    [new Date(2020,3,14), 1992903],
    [new Date(2020,3,15), 2076502],
    [new Date(2020,3,16), 2161885],
    [new Date(2020,3,17), 2249004],
    [new Date(2020,3,18), 2330764],
    [new Date(2020,3,19), 2406786],
    [new Date(2020,3,20), 2480741],
    [new Date(2020,3,21), 2556720],
    [new Date(2020,3,22), 2637439],
    [new Date(2020,3,23), 2722857],
    [new Date(2020,3,24), 2824741],
    [new Date(2020,3,25), 2915365],
    [new Date(2020,3,26), 2989175],
    [new Date(2020,3,27), 3055800],
    [new Date(2020,3,28), 3132312],
    [new Date(2020,3,29), 3213960],
    [new Date(2020,3,30), 3299603],
    [new Date(2020,4,1), 3394153],
    [new Date(2020,4,2), 3477488],
    [new Date(2020,4,3), 3559748],
    [new Date(2020,4,4), 3639330],
    [new Date(2020,4,5), 3720577],
    [new Date(2020,4,6), 3815902],
    [new Date(2020,4,7), 3912156],
    [new Date(2020,4,8), 4009284],
    [new Date(2020,4,9), 4098272],
    [new Date(2020,4,10), 4178097],
    [new Date(2020,4,11), 4252290],
    [new Date(2020,4,12), 4337445],
    [new Date(2020,4,13), 4425666],
    [new Date(2020,4,14), 4522009],
    [new Date(2020,4,15), 4621410],
    [new Date(2020,4,16), 4717009],
    [new Date(2020,4,17), 4799266],
  ]}
  options={{
    chart: {
      title:
        '',
    },
    width: 500,
    height: 400,
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: 'Temps' },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: 'CoronaVirus Cases' },
      },
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
  );
}
}

export default Ch;
