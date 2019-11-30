import React, {Component} from 'react'
import { Line } from '../../node_modules/react-chartjs-2'
export default class Graph extends Component  {
   constructor(props){
       super(props);
       this.state={
           data:[]
       }
   }
  componentDidMount(){
      this.setState({
          data:{
            labels:[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            datasets:[
                {
                    label:"Business Growth Rate",
                    data:[
                        100003,
                        100004,
                        100004,
                        100004,
                        100004,
                        100004,
                        100004,
                        100004,
                        100004,
                        100004,
                        100000,
                        110000,
    
                    ],
                    backgroundColor:[
                        "royalblue",
                        'red',
                        'pink',
                        'orange',
                        'yellow',
                        'brown',
                        'deeppink',
                        'skyblue',
                        'cyan',
                        'blue',
                        'springgreen',
                        'purple'
    
                    ]
                }
    
            ]
          }
      })
  }
        
render(){
    return (
        <div >
            <Line
            data={this.state.data}
            options={{
               maintainAspectRatio:true,
               title:{
                   display:true,
                   text:"The growth rate of your business",
                   fontSize:'14'
               },
               legend:{
                   display:true,
                   position:'top',
                
               }

            }}
            />

        

            
        </div>
    )
}

    
}


