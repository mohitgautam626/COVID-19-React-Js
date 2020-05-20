import React,{Component} from 'react';
import './covid.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pop from './population.json';
import Chart from './graph';
import Chart2 from './graph2';

class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      tc:'',
      country:[],
      news:[],
    }
  }
  componentDidMount(){
    axios.get('https://api.covid19api.com/world/total')
    .then(response=>{
      this.setState({
        tc:response.data,
      })
      console.log(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
    axios.get('https://api.covid19api.com/summary')
    .then(response2=>{
      this.setState({
        country:response2.data.Countries,
      })
      console.log(response2.data.Countries)
    })
    .catch(error2=>{
      console.log(error2)
    })
    axios.get('http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=b0bad5861041416dab086246d9605041')
    .then(response3=>{
      this.setState({
        news:response3.data.articles,
      })
    })
  }
  render(){
    const {tc,country,news}=this.state;
    var t_case=0,t_deaths=0,t_reco=0,t_act=0,t_ncase=0,t_ndeaths=0,t_nreco=0;
    let iterate = [];
    for(let i=0;i<186;i++){
      iterate.push(()=><h1>hello</h1>)
    }
    const sorted=country.sort((a,b)=>{
      return(
        b['TotalConfirmed']-a['TotalConfirmed']
      );
    });
    return(
      <React.Fragment>
  <div className="row contain">
  <div className="col-md-4 d2c">
  <h1><i><u>Health News Update</u></i></h1>
  <div class="container">
  <div className="rows">
  <div className="news">
  <marquee direction="up" height="280px" scrollamount="3" onMouseOver="">
  {
    news.map(item=>{
      return(
        <>
        <h5 className="news2">{item.title}</h5><br/>
        </>
      );
    })
  }
  </marquee>
  </div>
  </div>
  </div>
  <div>
  <button className="btn btn-success button">
  <Link to="/country" className="button">
  Click Here For India's Update
  </Link>
  </button>
  </div>
  </div>
  <div className="col-md-8 d2">
  <h1 className="h1">Coronavirus Cases:-<br/>
  <b id="num">{
    tc.TotalConfirmed
  }</b></h1>
  <h1 className="h1">Deaths:-<br/>
  <b id="num">{tc.TotalDeaths}</b></h1>
  <h1 className="h1">Recovered:-<br/>
  <b id="num">{tc.TotalRecovered}</b></h1>
  <hr id="hrcontent"/>
  <div className="container dl">
  <div>
  <h4 id="ch"><b>Total Cases</b></h4>
  <Chart/>
  </div>
  <div>
  <h4 id="ch"><b>Total Deaths</b></h4>
  <Chart2/>
  </div>
  </div>
  <hr id="hrcontent"/>
  <h3 className="tb"><i><b>Stats Of Corona Virus Affected Countries:-</b></i></h3>
  <div className="container">
  <table className="table table-striped table-hover table-bordered tbedit">
  <thead className="tb">
  <tr>
  <th>#</th>
  <th>Country</th>
  <th>Total Cases</th>
  <th>Total Deaths</th>
  <th>Total Recovered</th>
  <th>Active Cases</th>
  <th>Population</th>
  </tr>
  </thead>
  <tbody className="tb">
  {
    iterate.map((value,index)=>{
      const x=index;
      return(
  <tr>
  <td>{index+1}</td>
  <td>
  <Link to="/">
  {
    sorted.map((item,index)=>{
      if(index===x){
      return(
        <React.Fragment key={index}>
        {item.Country}
        </React.Fragment>
      );
    }
      })
  }
  </Link>
  </td>
  {
    sorted.map((item,index)=>{
      if(index===x){
        t_case+=item.TotalConfirmed;
        t_deaths+=item.TotalDeaths;
        t_reco+=item.TotalRecovered;
        t_act+=item.TotalConfirmed-item.TotalRecovered-item.TotalDeaths;
        t_ncase+=item.NewConfirmed;
        t_ndeaths+=item.NewDeaths;
        t_nreco+=item.NewRecovered;
      return(
        <React.Fragment key={index}>
        <td>{item.TotalConfirmed}<font className="add">(+{item.NewConfirmed})</font></td>
        <td>{item.TotalDeaths}<font className="add">(+{item.NewDeaths})</font></td>
        <td>{item.TotalRecovered}<font className="add">(+{item.NewRecovered})</font></td>
        <td>{item.TotalConfirmed-item.TotalRecovered-item.TotalDeaths}</td>
        {
          Pop.map((val,i)=>{
            if(item.Country===val.country){
            return(
            <>
            <td>{val.population}</td>
            </>
            );
          }
        })
        }
        </React.Fragment>
      );
    }
    })
}
  </tr>
);
})
}
<tr>
<td></td>
<td><b>Total:</b></td>
<td>{t_case}<font className="add">(+{t_ncase})</font></td>
<td>{t_deaths}<font className="add">(+{t_ndeaths})</font></td>
<td>{t_reco}<font className="add">(+{t_nreco})</font></td>
<td>{t_act}</td>
<td></td>
</tr>
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

export default Home;
