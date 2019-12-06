import React, {Suspense, Profiler , useState} from 'react';

import {Spinner} from 'reactstrap'
const OtherComponent = React.lazy(() => import('./Dashboard'));
const AnotherComponent = React.lazy(() => import('./Nav'));

function MyComponent(props) {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('');
    const [phoneNumber, setPhoneNumber]= useState(0);
    const [password, setPassword]= useState('');
    const submit= (e)=>{
     e.preventDefault();
     fetch('https://gotlodge.herokuapp.com/api/auth/signup', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        password,
        phoneNumber,
        password
      })
     }).
     then((res)=>{
      return res.json();
    }).then((resJSON)=>{
      console.log(resJSON)
    })

    }
  return (
    <div>

        
      <Suspense fallback={<div ><Spinner/></div>}>
        <section>
        {/* <Profiler id="OtherComponent" onRender={(id,phase, actualDuration, baseDuration,startTime, commitTime)=>{
           console.log({id,phase, actualDuration, baseDuration,startTime, commitTime})
        }}>
          <OtherComponent/>
        </Profiler>
        <Profiler onRender={(id,phase, actualDuration, baseDuration,startTime, commitTime,interactions)=>{
           console.log({id,phase, actualDuration, baseDuration,startTime, commitTime, interactions})
        }} id="AnotherComponent" >
        <AnotherComponent />
        </Profiler> */}

                <div className="form_ col-md-5 col-sm-12 offset-2">
                 <div className="form">
                     {/* <div className="alert alert-danger alert-dismissible">
                         Please enter all  fields
                     </div> */}
              <form onSubmit={submit}   className="form">
              <div className="form-group">
                    <label>
                        Name
                    </label>
                    <input value={name}  onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your phone number" className="form-control" name="phone_number"/>
                </div>
                <div className="form-group">
                    <label>
                       Email
                    </label>
                    <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your phone number" className="form-control" name="phone_number"/>
                </div>
                <div className="form-group">
                    <label>
                        Phone number
                    </label>
                    <input value={phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)} type="telephone" placeholder="Enter your phone number" className="form-control" name="phone_number"/>
                </div>
                <div className="form-group">
                    <label>
                      Password
                    </label>
                    <input value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your phone number" className="form-control" name="phone_number"/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary d-block" value="submit"/>
                </div>

                
               
                
               
              
              </form>
           </div>
                     </div>  
                 

          {/* <OtherComponent />
          <AnotherComponent /> */}
          
          
        </section>
      </Suspense>
    </div>
  );
}
MyComponent.say = function() {
console.log("Found me")
}

function WrapComponent(component){
   class ImputedComponent extends React.Component {
       constructor(props){
        super(props);
        this.state={
             name:"Sunkanmi",
             Comp:null,
            
        }
       }
       static defaultProps={
           name:"Sunkanmi"
       }
       
       componentWillMount(){
           this.setState({Comp:component});
       }
       render(){
         if(this.state.Comp){
            return (
            <this.state.Comp  {...this.props} age={50}/>
            )
         }
         else{
           return <h1>Compnent is loading</h1>
         }

       }
       
    
      
       
   }
  ImputedComponent.say = component.say
   return ImputedComponent
}
console.log(typeof WrapComponent.say)
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
export default WrapComponent(MyComponent)