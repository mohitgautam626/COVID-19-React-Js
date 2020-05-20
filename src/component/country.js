import React,{Component} from 'react';
import './covid.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Chart from './graph_india';
import Chart2 from './graph_india2';
import Chart3 from './graph_india3';
import Chart4 from './graph_india4';
import Flag from './images/india.png';

class Country extends Component{
  constructor(props){
    super(props)
    this.state={
      sta:[],
      time:[],
    }
  }
  componentDidMount(){
    axios.get('https://api.covid19india.org/data.json')
    .then(response=>{
      this.setState({
        sta:response.data.statewise,
        time:response.data.cases_time_series,
      })
    })
    .catch(error=>{
      console.log(error)
    })
  }
  render(){
    const {sta,time}=this.state;
    let iterate = [];
    for(let i=0;i<38;i++){
      iterate.push(()=><h1>hello</h1>)
    }
    const sorted=sta.sort((a,b)=>{
      return(
        b['confirmed']-a['confirmed']
      );
    })
    return(
      <React.Fragment>
  <div className="row contain">
  <div className="col-md-2">
  </div>
  <div className="col-md-8 d2">
  {
    sta.map((item,index)=>{
      if(item.state==="Total"){
      return(
        <React.Fragment>
        <div className="dl">
        <div>
      <img src={Flag} height={'80'} width={'120'} className="flag"/>
      </div>
      <div>
      <h1 className="flag_head"><b>India</b></h1>
      </div>
      </div>
  <h1 className="h1">Coronavirus Cases:-<br/>
  <b id="num">{
    item.confirmed
  }</b></h1>
  <h1 className="h1">Deaths:-<br/>
  <b id="num">{item.deaths}</b></h1>
  <h1 className="h1">Recovered:-<br/>
  <b id="num">{item.recovered}</b></h1>
  </React.Fragment>
);
}
})
  }
  <hr id="hrcontent"/>
  <div className="dl">
  <div>
  <h4 id="ch"><b>Total Cases</b></h4>
  <Chart time={time}/>
  </div>
  <div>
  <h4 id="ch"><b>Total Deaths</b></h4>
  <Chart2 time={time}/>
  </div>
  </div>
  <div className="dl">
  <div>
  <h4 id="ch"><b>Daily Recovered</b></h4>
  <Chart3 time={time}/>
  </div>
  <div>
  <h4 id="ch"><b>Daily Deaths</b></h4>
  <Chart4 time={time}/>
  </div>
  </div>
  <hr id="hrcontent"/>
  <h3 className="tb"><i><b>Stats Of Corona Virus Affected Provinces:-</b></i></h3>
  <div className="container">
  <table className="table table-striped table-hover table-bordered tbedit">
  <thead className="tb">
  <tr>
  <th>#</th>
  <th>States/Provinces</th>
  <th>Total Cases</th>
  <th>Total Deaths</th>
  <th>Total Recovered</th>
  <th>Active Cases</th>
  </tr>
  </thead>
  <tbody className="tb">
  {
    iterate.map((value,index)=>{
      const x=index;
      if(index!==0){
      return(
  <tr>
  <td>
  {index}
  </td>
  <td>
  {
    sorted.map((item,index)=>{
      if(index===x && index!==0){
      return(
        <React.Fragment key={item.state}>
        <Link to={'/district/?state='+item.state}>
        {item.state}
        </Link>
        </React.Fragment>
      );
    }
      })
  }
  </td>
  {
    sorted.map((item,index)=>{
      if(index===x && index!==0){
      return(
        <React.Fragment key={index}>
        <td>{item.confirmed}</td>
        <td>{item.deaths}</td>
        <td>{item.recovered}</td>
        <td>{item.confirmed-item.recovered-item.deaths}</td>
        </React.Fragment>
      );
    }
    })
}
  </tr>
);}
})
}
  </tbody>
  </table>
  </div>
  </div>
  </div>
  <div className="d1b">
<div className="row">
<div className="col-md-4">
</div>
<div className="col-md-6">
<h3 className="footer"><b>CORONA-O-PEDIA</b></h3>
<div className="container">
<p><a href="https://www.worldometers.info/coronavirus/">about | faq | languages | licensing | contact| report coronavirus cases</a></p>
</div>
</div>
<div className="col-md-1 stopex">
</div>
</div>
</div>
<div className="d2b">
<div className="row">
<div className="col-md-3">
</div>
<div className="col-md-5">
<div className="container">
<p className="bl">© Copyright corona-o-pedia.info - All rights reserved - Disclaimer & Privacy Policy</p>
</div>
</div>
</div>
</div>
  </React.Fragment>
    );
  }
}
export default Country;
