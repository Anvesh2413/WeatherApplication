import React, { Component } from 'react'
import Card from './Card'
import Chart from './Chart'



export default class Forcast extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[],
             city:"",
             days:"",
             min_temp:[],
            max_temp:[] ,       }
    }
  
    
    async componentDidUpdate(prevProps,prevState){
        if(prevProps.city!==this.props.city||prevProps.days!==this.props.days){
            const key="d8de9e264800e85418784220cbc1de01";
            const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&cnt=${this.props.days}&appid=${key}`)
            const data = await response.json();
            
            this.setState({data:data.list,city:data.city.name,days:this.props.days},console.log(data))
            
        }

    }
    async componentDidMount(){
        let min=[];
        let max=[];
        const key="d8de9e264800e85418784220cbc1de01";
        const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=${key}`)
        const data = await response.json();
              data.list.forEach(element => {
                  min.push(Math.round(element.main.temp_min-273))
                  max.push(Math.round(element.main.temp_min-273));
            
        });
        
        this.setState({data:data.list,city:data.city.name,days:this.props.days,min_temp:min,max_temp:max},console.log(data))
        
      
    }
    rev(str){
        str=str.split("-");
        str=str.reverse();
        str=str.join("-");
        return str;
    }
   
  
    
    render() {
        
        
        
        return (
            <div>
               
                    <div className="row mt-5">
                        

                {this.state.data.filter(day=>day.dt_txt.split(" ")[1]===this.props.time).map(filtered_day=>(

<div className="col-lg-2 col-md-3 col-sm-4" key={filtered_day.dt}>
    
<Card min={Math.round(filtered_day.main.temp_min-273)}
max={Math.round(filtered_day.main.temp_max-273)}
curr={Math.round(filtered_day.main.temp-273)}
 humid={filtered_day.main.humidity}
  date={this.rev(filtered_day.dt_txt.split(" ")[0])}
  time={filtered_day.dt_txt.split(" ")[1]}
  weather={filtered_day.weather[0].description}
  icon={filtered_day.weather[0].icon}></Card>
  </div>
                ))}
            
              
            
            </div>
         
            <div className="row ">

                            <div className="chart">

                            <Chart data={{min:this.state.min_temp,
                                          max:this.state.max_temp                    }} days={this.props.days/8}/>
                            </div>


            </div>
            </div>
            
        
        )
    }
}
