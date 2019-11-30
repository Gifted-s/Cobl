import React, { Component } from 'react'

export default  function AsyncComponent (import_){
 class asyncComponent extends Component {
     constructor(props){
        super();
        this.state= {
            component:null
        }
     }
    async componentDidMount(){
        const {default:component}= await import_();
        this.setState({component})
     }
    render() {
     const C = this.state.component
        return (C?<C {...this.props}/>: null )
    }

}
return asyncComponent;

}


