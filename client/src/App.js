
import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';




import AsyncComponent from './Components/AsyncComponent';
import ErrorBoundary from './Components/ErrorHandler';
const DropdownContext= AsyncComponent(()=>import("./Components/DropdownContext"))
const Home= AsyncComponent(()=>import("./Components/Home"));
const Signin= AsyncComponent(()=>import("./Components/Signin"))
const Signup= AsyncComponent(()=>import("./Components/Signup"));
const Dashboard= AsyncComponent(()=>import("./Components/Dashboard"));
const Products= AsyncComponent(()=>import("./Components/Products"));
const AddProduct= AsyncComponent((()=>import("./Components/UploadProduct")))
const Edit= AsyncComponent(()=>import('./Components/EditProfile'))
const Service= AsyncComponent(()=>import('./Components/Service'))
const About= AsyncComponent(()=>import('./Components/About'))
const New= AsyncComponent(()=>import('./Components/New'))
const user= localStorage.getItem('user');

const Error= function(props){
  return(
    <div className="row">
        <div className= "jumbotron col-10 col-md-8 mx-auto my-4">
          <h1 className="text-center ">
            Oops!!! page not  found
            
          </h1>
          
          <div className="col-10 col-md-8 mx-auto my-4">
          <p className="text-center">You can access other pages in this website</p>
          <button  onClick={()=>{
            props.history.push('/')
          }} className='mx-auto d-block btn btn-danger'>
            Click to go back to home page
          </button>
          </div>
         
        </div>

</div>
  

  
  )
}
class App extends Component {
  render(){

    return (
    
     <div className="App">
     <ErrorBoundary>
      <DropdownContext>
     
        <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signup" component={Signup}/>
          <Route path="/new" component={New}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/about" component={About}/>
          <Route path="/service" component={Service}/>
          <Route path="/upload" component={user ?AddProduct: Home }/>
          <Route path="/dashboard" component={user ?Dashboard: Home }/>
          <Route path="/edit" component={user ?Edit: Home }/>
          <Route path="/products" component={user ?Products: Home }/>
          <Route component={Error}/>
         
        </Switch>
        </BrowserRouter>
      </DropdownContext>
    </ErrorBoundary>
     </div>
    
     
     
      
    );
  }
 
}

export default App;
