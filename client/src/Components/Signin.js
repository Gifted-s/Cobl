import React, { useState  } from 'react';
import {  Row ,Container} from 'reactstrap';
import {Link} from 'react-router-dom';

const Signin = props => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [err, setError]=useState(null)
    const onSubmit=(e)=>{
         e.preventDefault();
        if(email==="" || password===""){
          return setError("Please fill all the fields")
        }
        fetch('http://localhost:3003/signin' , {
          method:"post",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
        })
        .then((res)=>{
          return res.json();
        })
        .then(resJSON=>{
          if(typeof resJSON ==="object"){
            var loggedin=false;
           ( async function setUser(){
              await  localStorage.setItem('user' , JSON.stringify(resJSON));
              loggedin= true;
            })().then(()=>{
              if(loggedin){
                return props.history.push('/dashboard')
              }
             
            })
           
           
          }
          if(typeof resJSON ==="string"){
            setError("No user with this email is found ")
          }
          if(typeof resJSON ==="boolean"){
            setError("Invalid email or password")
          }
          
        })
        .catch(err=>{
          console.log("An error occured")
        })
        
        
     }
        
        
        return (
            <Container>
          <div className="signin">
               
               <div className="row">
                   <div className="col-md-6 col-sm-12  offset-3">
                  
                   </div>
                   </div>   
                  
                       <Row>
                       <div className="form_ col-md-5 col-sm-12 offset-2">
                       <div className="form">
                        
                    <form onSubmit={onSubmit} className="form">
                      
                    <div className="navbar-brand" >
                  COBL
                </div>
                <h6 style={{padding:"10px", fontWeight:'normal'}} className="alert alert-primary">
                  
                  Please fill the form below to login
                </h6>
                {
                        err?(
                          <div className="alert alert-danger alert-dismissible">
                            {err}
                          </div>
                        ):
                        null
                      }
                      
                      <div className="form-group">
                          <label>
                             Email
                          </label>
                          <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" className="form-control" name="email"/>
                      </div>
                      <div className="form-group">
                      <label>
                             Password
                          </label>
                          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" className="form-control" name="password"/>
                      </div>
                     
                      <div className="form-group">
                          <input type="submit" value="Next" className="form-control signup btn btn-primary"/>
                      </div>
                      
                      <div>
                        
                       Dont have an account? <Link to='/signup'>Sign up</Link>
                      </div>
                    </form>
                 </div>
                </div> 
                </Row> 
             </div>
        </Container>
                           
                   
    )
}

export default Signin
