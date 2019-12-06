import React,{useState} from 'react'

const user= localStorage.getItem('user');
const UserJSON=JSON.parse(user)
const UploadProduct = () => {
   
    
    
    const [name, setName]= useState('');
    const [description, setDescription]= useState('');
    const [price, setPrice] = useState(null);
    const [message, setMSG]=useState('');
    const [err, setError]= useState('')
    const Submit= (e)=>{
        e.preventDefault();
        if(!price || !description|| !name){
          return setError('Please fill all the fields')
        }
        fetch("http://localhost:3003/upload", {
           method:'post',
           headers:{
            "content-type":'application/json'
           },
           body:JSON.stringify({
              name,
              description,
              price,
              user: UserJSON._id
             
           })
        }
        )
        .then((res)=>{
            return res.json()
        })
        .then((resJSON)=>{
         localStorage.setItem('user' , JSON.stringify(resJSON));
         setName('')
         setDescription('')
         setPrice('')
         setMSG("The product was uploaded successfully");
         
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <React.Fragment>
            <div className="row">
            <div className='col-10 mx-auto my-3 col-md-6'>
                <h4 className="text-center text-capitalize mx-auto my-3">
                  Please fill the form below to add product
                </h4>
                {
                    err?
                    <div className="alert alert-danger alert-dismissible">
                        {err}
                    </div>
                    :
                    null
                }
                {
                    message?
                    <div className="alert alert-success alert-dismissible">
                        {message}
                    </div>
                    :
                    null
                }
               
            <div className="form">
                <form autoComplete=" " onSubmit={Submit}>
                <div className="form-group">
                    <label className="label" htmlFor="input_fieled">Name of Product</label>
                    <input id="input_fieled" onChange={(e)=> setName(e.target.value)} className='form-control' placeholder="Enter the name of the product" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="input_fieled">Description of Product</label>
                    <input id="input_fieled" onChange={(e)=> setDescription(e.target.value)} className='form-control' placeholder="Enter a short description  of the product" />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="input_fieled">Price of product</label>
                    <input type="number" onChange={(e)=> setPrice(e.target.value)} id="input_fieled" className='form-control' placeholder="Enter the price of the product" />
          
             </div>
                <input className="btn btn-primary" value="Add product" type="submit"/>
                </form>
               
            </div>
            </div>
            </div>
       
        </React.Fragment>
    )
}

export default UploadProduct
