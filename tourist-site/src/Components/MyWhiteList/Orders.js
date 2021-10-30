import React, { useState } from 'react';

const Orders = ({order}) => {



    const [active,setActive]=useState({})

    const {name,Country,about,company,cost,picture,email,phone,status,_id}=order.whitelist;

    const getstatus=e=>{
        setActive(e.target.value);

    }
    
    const handleUpdate=e=>{
                    const handleChange=e=>{
                        const state=e.target.value;
                        const status={state}
                        setActive(status)



                    }  

        fetch(`https://pacific-falls-94383.herokuapp.com/order/${order._id}`,{
            method:"PUT",
              headers: { "content-type" :'application/json'},

            body:JSON.stringify({status:`${active}`})
        })

    }
    return (
        <div className=" container my-5 border border-info p-3 d-lg-flex align-items-center bg-dark">
           
               <img className="border rounded-3 me-5 img-fluid" src={picture} alt="" />
           
           <div className="text-light">
               <h4>place Name: <span className="text-light">{name}</span></h4>

               <div className="border border-info p-2 text info bg-dark text-light">

         <center> <h4>total cost:{cost} </h4>
          <h5>A Tour By : {company}</h5>
          <h5>Contact email : {email}</h5>
          <h5>Contact Phone: {phone}</h5>
          </center>
          <h5>status : {order.status}</h5>

       
      </div> 
         <form onSubmit={handleUpdate} >
      <button className="btn-warning p-3 text-light m-3">Activate</button>
         </form>
           </div>
        </div>
    );
};

export default Orders;