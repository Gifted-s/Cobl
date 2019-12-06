import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
  constructor(props){
    super(props);
    this.state={
      hasError:false
    }
  }

 static getDerivedStateFromError(){
   return {
     hasError:true
   }
 }
 componentDidCatch(error, errorInfo){
   React.logErrorToMyService(error,errorInfo);
   
 }
  render() {
    if(this.state.hasError){
      return(
        <div>
          
           <h1>An error occured while Loading the page............<span style={{color:'green'}}>COBL.com</span></h1>
        </div>
      )
      
    }
    return (
      <div>
        {this.props.children}
      </div>
      
    )
  }
}
