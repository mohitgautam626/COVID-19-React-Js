import React,{Component} from 'react';
import './covid.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import QueryString from 'query-string';
import Image from './dimage';

class Country extends Component{
  constructor(props){
    super(props)
    this.state={
      sta:[],
      district:[],
    }
  }
  componentDidMount(){
    axios.get('https://api.covid19india.org/v2/state_district_wise.json')
    .then(response=>{
      this.setState({
        district:response.data,
      })
    })
    .catch(error=>{
      console.log(error)
    })
    axios.get('https://api.covid19india.org/data.json')
    .then(response=>{
      this.setState({
        sta:response.data.statewise,
      })
    })
    .catch(error=>{
      console.log(error)
    })
  }
  render(props){
    const value=QueryString.parse(this.props.location.search);
    const state=value.state;
    const {sta,district}=this.state;
    let iterate = [];
    for(let i=0;i<38;i++){
      iterate.push(()=><h1>hello</h1>)
    }
    return(
      <React.Fragment>
  <div className="row contain">
  <div className="col-md-2">
  </div>
  <div className="col-md-8 d2">
  {
    sta.map((item,index)=>{
      if(item.state===state){
      return(
        <React.Fragment>
        <div className="dl">
        <div>
      <Image state={state}/>
      </div>
      <div>
      <h1 className="flag_head"><b>{state}</b></h1>
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
  <h3 className="tb"><i><b>Stats Of Corona Virus Affected Zones/Districts:-</b></i></h3>
  <div className="container">
  <table className="table table-striped table-hover table-bordered tbedit">
  <thead className="tb">
  <tr>
  <th>#</th>
  <th>District</th>
  <th>Total Cases</th>
  <th>Total Deaths</th>
  <th>Total Recovered</th>
  <th>Active Cases</th>
  </tr>
  </thead>
  <tbody className="tb">
  {
    district.map((value,index)=>{
      if(value.state===state){
      const d=value.districtData;
      const sorted=d.sort((a,b)=>{
        return(
          b['confirmed']-a['confirmed']
        );
      })
      return(
        <React.Fragment>
  {
    d.map((item,index)=>{
      return(
        <React.Fragment key={index}>
        <tr>
        <td>{index+1}</td>
        <Link>
        <td>{item.district}</td>
        </Link>
        <td>{item.confirmed}</td>
        <td>{item.deceased}</td>
        <td>{item.recovered}</td>
        <td>{item.active}</td>
        </tr>
        </React.Fragment>
      );
    })
   }
</React.Fragment>
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
