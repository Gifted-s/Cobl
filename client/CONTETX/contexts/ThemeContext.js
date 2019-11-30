import React , {Component , createContext} from 'react';

const ThemeContext= createContext();
class ThemeContextProvider extends Component{
    state= {
     isLightTheme:true,
     dark :{bg:'white' , syntax:'black'},
     light:{bg:'black' , syntax:'white'},
    }
    changeTheme= ()=>{
        this.setState({isLightTheme:!this.state.isLightTheme})
    }
render(){
    return(
        <ThemeContext.Provider value={{...this.state , toggleTheme:this.changeTheme}}>
                {this.props.children}
        </ThemeContext.Provider>

    )
}
}
export {ThemeContext}
export default ThemeContextProvider
