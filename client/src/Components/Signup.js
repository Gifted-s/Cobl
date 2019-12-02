import React, { useState  } from 'react';
import { Nav, NavItem, Row ,Container,  NavLink } from 'reactstrap';

import {Link} from 'react-router-dom'


const Signup = (props) => {
 
          
  const [step , setStep]= useState(1);
  const [name, setName] = useState('');
  const [phone , setPhone]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [registerType, setRegisterType] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErr] = useState([]);
  
  
  
  const onSubmit= (e)=>{
      e.preventDefault();
     
     fetch("http://localhost:3003/register", {
       method:"post",
       headers:{
        "Content-type":"application/json",
       },
       body:JSON.stringify({
            name,
            email,
            password,
            category,
            registerType,
            phone
       })
     }).then((res)=>{
        return res.json()
     })
     .then((resJson)=>{

      localStorage.setItem('user' , JSON.stringify(resJson));
      return (
         
        props.history.push('/dashboard')
       

        
      )
     })
     .catch(err=>{
       console.log(err+ "    ERROR");
       setErr([...err,"There is a problem with the server try again"] )
     })
      // const req= await axios('http://localhost:3001/register',formData, {
      //   method:"post",
      //   headers:{
      //     "content-type" :"application/json"
      //   }
       

      // })
      
      
      
  }
  const validate = ()=>{
    if(password2 !==password){
        return setErr([...errors, "Password does not match"])
    }
   if(name && password&& email&& password){
    setErr([])
     return  setStep(2)
   }
   setErr([...errors, "please enter the required fields"])
  }
  return (
      <Container>
<div className="signup">
         
         <div className="row">
             <div className="col-md-6 col-sm-12  offset-3">
             <Nav tabs>
            <NavItem>
              <NavLink href="#" onClick={()=>setStep(1)}  className={step===1? 'active bg-primary':'inactive'} >Step 1</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="#" onClick={()=> {name && email && password  ?setStep(2):setErr([...errors,"Please fill all fields before progressing"])
            
            }} className={step===2? 'active bg-primary':'inactive'} >Step 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={()=> {name && email && password && category && phone&&registerType  ?setStep(3):setErr([...errors,"Please fill all fields before progressing"])
            
            }} className={step===3? 'active bg-primary':'inactive'} >Step 3</NavLink>
            </NavItem>
          
           
          </Nav>
             </div>
             </div>   
             {
                 step===1?
                 <Row>
                 <div className="form_ col-md-5 col-sm-12 offset-2">
                 <div className="form">
                     {
                         errors? 
                        
                         errors.map((error)=>{
                             return(
                                <div key={error} className="alert alert-danger alert-dismissible">
                                {error}
                                </div>
                             )
                           
                            
                         })
                         :null
                        
                     }
                     
              <form method="POST"  className="form">
                <div className="navbar-brand" >
                  COBL
                </div>
                <h6 style={{padding:"10px", fontWeight:'normal'}} className="alert alert-primary">
                  Please fill the form below to register
                </h6>
                <div className="form-group">
                    <label>
                        Full Name
                    </label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter full name" className="form-control" name="name"/>
                </div>
                <div className="form-group">
                    <label>
                       Email
                    </label>
                    <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" className="form-control" name="email"/>
                </div>
                <div className="form-group">
                <label>
                       Password
                    </label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" className="form-control" name="password"/>
                </div>
                <div className="form-group">
                    <label>
                        Confirm Password
                    </label>
                    <input value={password2} onChange={(e)=>setPassword2(e.target.value)} type="password" placeholder="Confirm password" className="form-control" name="password2"/>
                </div>
                <div className="form-group">
                    <input  type="button" onClick={validate} value="Next" className="form-control signup btn btn-primary"/>
                </div>
                <div>
                  Already have an account? <Link to="/signin">Sign in</Link>
                </div>
              </form>
           </div>
                     </div> </Row>  :null
             }
             {
                 step===2?
                 <Row>
                 <div className="form_ col-md-5 col-sm-12 offset-2">
                 <div className="form">
                     {/* <div className="alert alert-danger alert-dismissible">
                         Please enter all  fields
                     </div> */}
              <form   className="form">
                  
                <div className="form-group">
                    <label>
                        Phone number
                    </label>
                    <input value={phone}  onChange={(e)=>setPhone(e.target.value)} type="telephone" placeholder="Enter your phone number" className="form-control" name="phone_number"/>
                </div>
                <label>
                       Registeration type
                    </label>
                <div className="choose form-group">
                
               <input  onChange={(e)=>setRegisterType(e.target.value)} name="select"  type="radio" value="leader"/>Register as a leader
               <input onChange={(e)=>setRegisterType(e.target.value)}  name="select" type="radio" value="market"/>Register for E-market
                </div>
               
                
                <div className="form_select">
                   <label>
                        Select business category
                    </label>
                   <select value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="select business category" id="select" name="category" className="form-control">
                      <option name="category" value="utensils">
                        Utensils
                      </option>
                      <option name="category" value="foodstuff">
                        Foodstuff
                      </option>
                      <option name="category" value="electronics">
                        Electronics
                      </option>
                      <option name="category" value="automobile">
                        Automobile
                      </option>
                      <option name="category" value="fashion">
                       Fashion
                      </option>
                      <option name="category" value="photography">
                        Photography
                      </option>
                      <option name="category" value="provision">
                        Provision
                      </option>
                      <option name="category" value="drugs">
                        Drugs
                      </option>
                   </select>
                </div>
              
                <div className="form-group">
                    <input onClick={()=>{
                        setStep(3)
                    }}  type="button" value="Next" className="form-control signup btn btn-primary"/>
                </div>
              </form>
           </div>
                     </div> </Row> 
                 
                 
                 :
                 null
             }
                        


                         {
                 step===3?
                 <Row>
                 <div className="check form_ col-md-5 col-sm-12 offset-2">
                 <div className="form">
                     {/* <div className="alert alert-danger alert-dismissible">
                         Please enter all  fields
                     </div> */}
              <form onSubmit={onSubmit}  className="form">
                  
                <h5>Please review your credentials before the final submission</h5>
                <hr/>
                <div className="review_item">
                <h6>Name</h6><span>{name}</span>
                </div>
                <hr/>
                <div className="review_item">
                <h6>Email</h6><span>{email}</span>
                </div>
                <hr/>
                <div className="review_item">
                <h6>Registeration type</h6><span>{registerType}</span>
                </div>
                <hr/>
                <div className="review_item">
                <h6>Phone Number</h6><span>{phone}</span>
                </div>
                <hr/>
                <div className="review_item">
                <h6>Business category</h6><span>{category}</span>
                </div>
               

                
                 <hr/>
                <div className="form-group">
                    <button  type="Submit"  className="form-control signup btn btn-primary">Submit</button>
                </div>
              </form>
           </div>
                     </div> </Row> 
                 
                 
                 :
                 null
             }
                        
          
        </div>
      </Container>
    
  );
}

export default Signup;