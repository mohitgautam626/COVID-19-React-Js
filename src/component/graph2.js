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
      'Deaths',
    ],
    [new Date(2020,2,1), 3050],
    [new Date(2020,2,2), 3117],
    [new Date(2020,2,3), 3202],
    [new Date(2020,2,4), 3285],
    [new Date(2020,2,5), 3387],
    [new Date(2020,2,6), 3493],
    [new Date(2020,2,7), 3598],
    [new Date(2020,2,8), 3826],
    [new Date(2020,2,9), 4023],
    [new Date(2020,2,10), 4297],
    [new Date(2020,2,11), 4627],
    [new Date(2020,2,12), 4980],
    [new Date(2020,2,13), 5427],
    [new Date(2020,2,14), 5841],
    [new Date(2020,2,15), 6532],
    [new Date(2020,2,16), 7180],
    [new Date(2020,2,17), 8000],
    [new Date(2020,2,18), 8983],
    [new Date(2020,2,19), 10077],
    [new Date(2020,2,20), 11457],
    [new Date(2020,2,21), 13101],
    [new Date(2020,2,22), 14739],
    [new Date(2020,2,23), 16671],
    [new Date(2020,2,24), 19157],
    [new Date(2020,2,25), 21746],
    [new Date(2020,2,26), 24691],
    [new Date(2020,2,27), 28160],
    [new Date(2020,2,28), 31831],
    [new Date(2020,2,29), 35174],
    [new Date(2020,2,30), 39334],
    [new Date(2020,2,31), 44043],
    [new Date(2020,3,1), 49233],
    [new Date(2020,3,2), 55503],
    [new Date(2020,3,3), 61465],
    [new Date(2020,3,4), 67531],
    [new Date(2020,3,5), 72535],
    [new Date(2020,3,6), 78141],
    [new Date(2020,3,7), 86033],
    [new Date(2020,3,8), 92768],
    [new Date(2020,3,9), 100434],
    [new Date(2020,3,10), 107781],
    [new Date(2020,3,11), 113989],
    [new Date(2020,3,12), 119554],
    [new Date(2020,3,13), 125193],
    [new Date(2020,3,14), 132601],
    [new Date(2020,3,15), 140791],
    [new Date(2020,3,16), 147789],
    [new Date(2020,3,17), 156218],
    [new Date(2020,3,18), 162894],
    [new Date(2020,3,19), 167788],
    [new Date(2020,3,20), 173277],
    [new Date(2020,3,21), 180561],
    [new Date(2020,3,22), 187259],
    [new Date(2020,3,23), 193964],
    [new Date(2020,3,24), 200381],
    [new Date(2020,3,25), 206482],
    [new Date(2020,3,26), 210239],
    [new Date(2020,3,27), 214748],
    [new Date(2020,3,28), 221436],
    [new Date(2020,3,29), 228029],
    [new Date(2020,3,30), 233824],
    [new Date(2020,4,1), 239447],
    [new Date(2020,4,2), 244664],
    [new Date(2020,4,3), 248144],
    [new Date(2020,4,4), 252240],
    [new Date(2020,4,5), 258026],
    [new Date(2020,4,6), 264837],
    [new Date(2020,4,7), 270426],
    [new Date(2020,4,8), 275976],
    [new Date(2020,4,9), 280224],
    [new Date(2020,4,10), 283732],
    [new Date(2020,4,11), 287183],
    [new Date(2020,4,12), 292744],
    [new Date(2020,4,13), 298108],
    [new Date(2020,4,14), 303463],
    [new Date(2020,4,15), 308542],
    [new Date(2020,4,16), 312902],
    [new Date(2020,4,17), 316520],
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
      0: { axis: 'Temps',color:'red' },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: 'CoronaVirus Deaths' },
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
