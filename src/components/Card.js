import React ,{useState}  from 'react'
import ReactCardFlip from 'react-card-flip'


export default function Card(props) {
            const[isFlipped,setFlip]=useState(false);
    return (






     <div >
  
        
        <div className="card-transparent" onMouseEnter={()=>setFlip(true)} onMouseLeave={()=>setFlip(false)} >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    
          <div className="card-block special-card" style={{backgroundColor:"rgba(245,245,245,0.4)"}}>
  <img className="card-img-top" src={`https://openweathermap.org/img/w/${props.icon}.png`} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title"><i className="fa fa-calendar-o"></i> {props.date}</h5>
    <h5 className="card-title"><i className="fa fa-clock-o"></i> {props.time}</h5>
  

    
    
  </div>
  </div>
  

  <div className="card-block special-card" style={{backgroundColor:"rgba(245,245,245,0.4)"}}>
  <div className="card-body">
    
    <h5 className="card-title">{props.weather}</h5>
    <p className="cart-text">
       Temp<i className="fa fa-thermometer-empty"></i>:{props.curr}C<br/>
    Min <i className="fa fa-thermometer-empty"></i>:{props.min}C<br/>
          Max <i className="fa fa-thermometer-empty"></i>:  {props.max}C<br/>
          Humidity<i className="fa fa-sun-o"></i>:{props.humid}<br/>
    </p>
    </div>
    </div>
  </ReactCardFlip>
  </div>
  
  
  </div>
  
  
  

    )
}
