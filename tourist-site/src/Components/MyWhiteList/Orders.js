import React, { useEffect, useState } from 'react';

const Orders = ({order}) => {
               

    const [services,setServices]=useState([])
        

    const {name,Country,company,cost,picture,email,phone,status,_id}=order.whitelist;
    
    const handleUpdate=e=>{ 

        fetch(`https://pacific-falls-94383.herokuapp.com/order/${order._id}`,{
            method:"PUT",
              headers: { "content-type" :'application/json'},

            body:JSON.stringify(services)
        })

      

    }


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
        <div className=" container my-5 border border-info p-3 d-lg-flex align-items-center bg-dark">
           
               <img className="border rounded-3 me-5 img-fluid" src={picture} alt="" />
           
           <div className="text-light">
               <h4>place Name: <span className="text-light">{name}</span></h4>
               <h4>Country: <span className="text-light">{Country}</span></h4>

               <div className="border border-info p-2 text info bg-dark text-light">

         <center> <h4>total cost:{cost} </h4>
          <h5>A Tour By : {company}</h5>
          <h5>Contact email : {email}</h5>
          <h5>Contact Phone: {phone}</h5>
          
          </center>
           {status?<h5>status : {order.status}</h5>:<h3></h3>}

           <div>
               <button onClick={()=>handleDelete(order._id)} className="btn-danger text-light p-3 border rounded-3">Delete Purhase</button>
           </div>

       
      </div> 
         <form onSubmit={handleUpdate} >
        
      <button className="btn-warning p-3 text-light m-3 border rounded-3">Activate</button>
         </form>
           </div>
        </div>
    );
};

export default Orders;