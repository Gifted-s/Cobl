import React , {Component, createContext} from 'react'
const Auth= createContext();
 class AuthContextProvider extends Component{
    state={
        isAuthenticated: false
    }

 
    changelogin= ()=>{
        this.setState({isAuthenticated:!this.state.isAuthenticated})
    }

  render(){
      return(
         <Auth.Provider value={{...this.state , changelogin: this.changelogin}}>
           {this.props.children}
         </Auth.Provider>
      )
  }
}
export {Auth}
export default AuthContextProvider