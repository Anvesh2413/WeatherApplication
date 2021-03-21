import React ,{useState}from 'react'
import Forcast from './Forcast'
import Location from './Location'

export default function Navbar() {
    const[city,setCity]=useState('Mumbai')
    const[days,setDays]=useState(40)
    return (
        <div>



            <div className="row mt-5">
            <div className="col-lg-5 col-lg-5 col-lg-5" > 
            <Location city={city}/>
               </div>
            
             <div className="col-md-2 col-md-3 col-md-4" >
            <form className="form-inline" onSubmit={(event)=>{event.preventDefault();
                if(document.getElementById('ct').value!==''){
                    setCity(document.getElementById('ct').value);
                    var d=document.getElementById('ndays').value.split(" ");
                    d=d[0];
                    if(d==='1')
                    setDays(8);
                    else if(d==='2')
                    setDays(16)
                    else if(d==='3')
                    setDays(24)
                    else if(d==='4')
                    setDays(32)
                    else
                    setDays(40)
    
                }
               
            }} >
  <div className="form-group mb-2">
            <input id="ct" className="form-control" type="text" placeholder="Enter City here..." autoComplete="off"></input>
            
    <select className="form-control" id="ndays">
    <option > Select Days</option>
      <option>1 Day</option>
      <option>2 Days</option>
      <option>3 Days</option>
      <option>4 Days</option>
      <option active="true">5 Days</option>
    </select>
            <button type="submit" className="btn btn-primary ">Search <i className="fa fa-search"></i></button>
            </div>
            </form>
            </div>
            </div>
            
            
            
        
            
            {console.log(city)}
            <Forcast city={city} days={days} time="03:00:00"/>
        </div>
    )
}
