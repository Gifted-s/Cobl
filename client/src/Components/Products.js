import React, {useState, useEffect} from 'react';
import {Spinner} from 'reactstrap';
const user= localStorage.getItem('user');

const userJSON= JSON.parse(user)
const pro= userJSON._id
const Products = () => {
    const [products, setProducts]= useState({});
    useEffect(()=>{
        fetch(`http://localhost:3003/getProducts/${pro}`, {
            method:'get',
            headers:{
             "content-type":'application/json'
            }
         }
         )
         .then((res)=>{
             return res.json()
         })
         .then((resJSON)=>{
         
        setProducts(resJSON)
         })
    } , [products])
    
    return (
        <React.Fragment>
              <div className="col-10 col-md-6 mx-auto">
                  <h3 className="text-center text-slant">Your products</h3>
                {products.products?
                
                <div className="row">
                    {
                        
               products.products.map((product)=>{
                   
               return(
       
             <div className="col-10 col-md-4 mx-auto my-4">
            <div className="card product">
            <div className="card-title">
            <h5>{product.name}</h5>
            
            </div>
            
            <div className="card-body">
            {product.description}

            </div>
            <div className="price badge bg-primary">
            ₦{product.price}
            </div>

        </div>
      
    
            </div>
       
                             )
  
                         })
                    }
                   </div>:
                    <h2 className="text-center mx-auto my-4"><Spinner key="Loading" size="sm"/></h2>
                }
                
               </div>
               
            
         
        </React.Fragment>
    )
}

export default Products
