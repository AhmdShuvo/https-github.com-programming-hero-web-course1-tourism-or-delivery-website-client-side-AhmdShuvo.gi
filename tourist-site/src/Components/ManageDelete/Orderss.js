import React from 'react';
import { Card } from 'react-bootstrap';

const Orderss = ({service}) => {


    const {name,picture,}=service.whitelist

    const handleDelete=(id)=>{

        fetch(`http://localhost:9000/order/${id}`,{
            method:'DELETE',
            headers: { "content-type" :'application/json'}
        }).then( async res=>res.json()).then(async data=>{
            console.log(data);
        });
        

        window.location.reload()

  }
    return (
        <div className="container my-5 border border-3">
            <div className=" border border-info p-3 m-3 bg-dark text-info">
            <h1>User Name  : {service.Name} </h1>
               <div className="d-flex align-items-center">
                   <img className="w-50 me-5" src={picture} alt="" />
                   <div>
                   <h4>{name}</h4>
                  
           </div>
            </div>
            <button onClick={()=>handleDelete(service._id)} className="btn-danger p-3 text-light border rounded-3 m-3">Delete</button>
                   </div>

        </div>
    );
};

export default Orderss;