import React , {useState} from 'react'
import {Link} from 'react-router-dom'
const EditProfile = () => {
  const userJSON=  localStorage.getItem('user');
  const user= JSON.parse(userJSON)
    const [name, setName] = useState('');
    const [phone , setPhone]= useState('');
    const [email, setEmail]= useState('');
    const [account, setAccount] = useState('');
    const [message, setMessage]= useState('')
    
    const onSubmit= (e)=>{
        e.preventDefault();
       
       fetch("http://localhost:3003/edit", {
         method:"post",
         headers:{
          "Content-type":"application/json",
         },
         body:JSON.stringify({
              name,
              email,
              account,
              phone,
              id:user._id
         })
       }).then((res)=>{
          return res.json()
       })
       .then((resJson)=>{
        setMessage("Your details have been updated successfully")
        localStorage.setItem('user' , JSON.stringify(resJson));
        
       })
       .catch(err=>{
        console.log(err)
         
       })
     
        
        
        
    }
    return (
        <React.Fragment>
            <div className="col-10 mx-auto my-3 col-md-5">
                               
                <h3 className="my-4 text-center text-slant">Edit profile</h3>
                <form onSubmit={onSubmit} className="form">
                {message
                ? <div className="alert alert-dismissible alert-success">
                    {message}
                </div>
                :
                null}
                    <div className="form-group">
                        <label htmlFor="form_label" className="label">
                          Name: {user.name}
                        </label>
                        <input onChange={(e)=>setName(e.target.value)} id="form_label" className="form-control"   placeholder="Enter new name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form_label" className="label">
                          Email: {user.email}
                        </label>
                        <input  onChange={(e)=>setEmail(e.target.value)} id="form_label" className="form-control"   placeholder="Enter new email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form_label" className="label">
                          Phone number: {user.phone}
                        </label>
                        <input onChange={(e)=>setPhone(e.target.value)}  id="form_label" className="form-control"   placeholder="Enter new phone number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form_label" className="label">
                       Registration type: {user.registerType}
                        </label>
                        <input id="form_label" className="form-control"  disabled placeholder="Contact customer care to change this"/>
                    </div>
                    <Link to='/products'>View Products</Link>
                    <div className="form-group">
                        <label htmlFor="form_label" className="label">
                          Account number: {user.account}
                        </label>
                        <input type="number" onChange={(e)=>setAccount(e.target.value)}  id="form_label" className="form-control"   placeholder="Your new account number"/>
                    </div>
                    
                    <div className="form-group">
                        
                        <input type="submit" id="form_label" className="form-control btn btn-primary"   />
                    </div>

                </form>
            </div>
        </React.Fragment>
    )
}

export default EditProfile
