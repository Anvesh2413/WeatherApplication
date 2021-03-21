import React from 'react'
import {Line} from 'react-chartjs-2'

export default function Chart(props) {
    
    let days=props.days;
    let max=[];let min=[];
    for(let i=0;i<days;i++)
    {
        max[i]=props.data.max[i];
        min[i]=props.data.min[i];
    }
    
    const data={
        labels:['1','2','3','4','5'],
        datasets:[
            {
            label:'Min Temprature in (c)',
            data:min,
            borderColor:'blue',
            backgroundColor:'rgba(255,206,86,0.2)',
            pointBackgroundColor:'rgba(255,206,86,0.2)',
            pointBorderColor:'rgba(255,206,86,0.2)',
            },
            {
                label:'Max Temprature in (c)',
                data:max,
                borderColor:'red',
            backgroundColor:'rgba(255,200,86,0.2)',
            pointBackgroundColor:'rgba(255,206,86,0.2)',
            pointBorderColor:'rgba(255,206,86,0.2)',
                }
        ],
       
            
    }
    const option={
        title:{
            display:true,
            text:'Weather Chart'
        },
        scales:{
            xAxes:[{
                ticks:{
                    min:1,
                    max:5,
                    stepSize:1,
                }
            }
            ],
            yAxes:[{
                ticks:{
                    min:0,
                    max:40,
                    stepSize:5,
                }
            }
            ]
        }
    }
    return (
        <div>
            <Line data={data} options={option} />
        </div>
    )
}
