import React,{Component} from 'react';
import './covid.css';
import Andhra from './images/Andhra Pradesh.png';
import Uttar from './images/Uttar Pradesh.png';
import Arunachal from './images/Arunachal Pradesh.png';
import Assam from './images/Assam.png';
import Gujarat from './images/Gujarat.png';
import Bihar from './images/Bihar.png';
import Chhattisgarh from './images/Chhattisgarh.png';
import Delhi from './images/Delhi.jfif';
import Goa from './images/Goa.png';
import Himachal from './images/Himachal Pradesh.gif';
import Jammu from './images/Jammu and Kashmir.png';
import Jharkhand from './images/Jharkhand.jpg';
import Karnataka from './images/Karnataka.png';
import Kerala from './images/Kerala.png';
import Maharashtra from './images/Maharashtra.png';
import Madhya from './images/Madhya Pradesh.png';
import Manipur from './images/Manipur.jfif';
import Meghalaya from './images/Meghalaya.png';
import Nagaland from './images/Nagaland.png';
import Odisha from './images/Odisha.png';
import Punjab from './images/Punjab.png';
import Rajasthan from './images/Rajasthan.jpeg';
import Tamil from './images/Tamil Nadu.jfif';
import Telangana from './images/Telangana.webp';
import Tripura from './images/Tripura.jfif';
import Uttarakhand from './images/Uttarakhand.png';
import West from './images/West Bengal.png';
import Sikkim from './images/Sikkim.jpg';
import Emblem from './images/emblem.png'

class Image extends Component{
  render(props){
    const {state}=this.props;
    if(state==="Andhra Pradesh")
    return(<img src={Andhra} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Uttar Pradesh")
    return(<img src={Uttar} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Arunachal Pradesh")
    return(<img src={Arunachal} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Assam")
    return(<img src={Assam} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Gujarat")
    return(<img src={Gujarat} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Bihar")
    return(<img src={Bihar} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Chhattisgarh")
    return(<img src={Chhattisgarh} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Delhi")
    return(<img src={Delhi} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Goa")
    return(<img src={Goa} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Himachal Pradesh")
    return(<img src={Himachal} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Jammu and Kashmir")
    return(<img src={Jammu} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Jharkhand")
    return(<img src={Jharkhand} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Karnataka")
    return(<img src={Karnataka} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Kerala")
    return(<img src={Kerala} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Maharashtra")
    return(<img src={Maharashtra} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Madhya Pradesh")
    return(<img src={Madhya} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Manipur")
    return(<img src={Manipur} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Meghalaya")
    return(<img src={Meghalaya} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Nagaland")
    return(<img src={Nagaland} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Odisha")
    return(<img src={Odisha} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Punjab")
    return(<img src={Punjab} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Rajasthan")
    return(<img src={Rajasthan} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Tamil Nadu")
    return(<img src={Tamil} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Telangana")
    return(<img src={Telangana} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Tripura")
    return(<img src={Tripura} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Uttarakhand")
    return(<img src={Uttarakhand} height={'80'} width={'120'} className="flag"/>);
    else if(state==="West Bengal")
    return(<img src={West} height={'80'} width={'120'} className="flag"/>);
    else if(state==="Sikkim")
    return(<img src={Sikkim} height={'80'} width={'120'} className="flag"/>);
    else
    return(<img src={Emblem} height={'80'} width={'120'} className="flag"/>);
  }
}

export default Image;
